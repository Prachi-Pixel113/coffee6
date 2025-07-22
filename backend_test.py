#!/usr/bin/env python3
"""
Backend API Testing Suite for Coffee Shop Application
Tests all backend functionality after hero section visual enhancements
"""

import requests
import json
import time
from datetime import datetime
import sys
import os

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"Testing backend at: {API_BASE_URL}")

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        
    def log_test(self, test_name, passed, message="", response_time=None):
        """Log test result"""
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            self.failed_tests += 1
            status = "❌ FAIL"
            
        result = {
            'test': test_name,
            'status': status,
            'message': message,
            'response_time': response_time
        }
        self.test_results.append(result)
        
        time_info = f" ({response_time:.3f}s)" if response_time else ""
        print(f"{status}: {test_name}{time_info}")
        if message:
            print(f"    {message}")
    
    def test_health_check(self):
        """Test basic health check endpoint"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Health Check (GET /api/)", True, 
                                f"Server responding correctly", response_time)
                else:
                    self.log_test("Health Check (GET /api/)", False, 
                                f"Unexpected response: {data}", response_time)
            else:
                self.log_test("Health Check (GET /api/)", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Health Check (GET /api/)", False, f"Connection error: {str(e)}")
    
    def test_create_status_check(self):
        """Test creating a status check"""
        try:
            test_data = {
                "client_name": "Coffee Shop Test Client"
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'client_name', 'timestamp']
                
                if all(field in data for field in required_fields):
                    if data['client_name'] == test_data['client_name']:
                        self.log_test("Create Status Check (POST /api/status)", True, 
                                    f"Status check created successfully with ID: {data['id']}", response_time)
                        return data['id']  # Return ID for further testing
                    else:
                        self.log_test("Create Status Check (POST /api/status)", False, 
                                    f"Client name mismatch: expected '{test_data['client_name']}', got '{data['client_name']}'", response_time)
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test("Create Status Check (POST /api/status)", False, 
                                f"Missing required fields: {missing_fields}", response_time)
            else:
                self.log_test("Create Status Check (POST /api/status)", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Create Status Check (POST /api/status)", False, f"Connection error: {str(e)}")
        
        return None
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get Status Checks (GET /api/status)", True, 
                                f"Retrieved {len(data)} status checks", response_time)
                    
                    # Validate structure of returned items
                    if data:
                        first_item = data[0]
                        required_fields = ['id', 'client_name', 'timestamp']
                        if all(field in first_item for field in required_fields):
                            self.log_test("Status Check Data Structure", True, 
                                        "All required fields present in response")
                        else:
                            missing_fields = [field for field in required_fields if field not in first_item]
                            self.log_test("Status Check Data Structure", False, 
                                        f"Missing fields in response: {missing_fields}")
                else:
                    self.log_test("Get Status Checks (GET /api/status)", False, 
                                f"Expected list, got {type(data)}", response_time)
            else:
                self.log_test("Get Status Checks (GET /api/status)", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Status Checks (GET /api/status)", False, f"Connection error: {str(e)}")
    
    def test_invalid_endpoints(self):
        """Test error handling for invalid endpoints"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 404:
                self.log_test("Error Handling (404)", True, 
                            "Correctly returns 404 for non-existent endpoint", response_time)
            else:
                self.log_test("Error Handling (404)", False, 
                            f"Expected 404, got {response.status_code}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Error Handling (404)", False, f"Connection error: {str(e)}")
    
    def test_invalid_post_data(self):
        """Test error handling for invalid POST data"""
        try:
            # Test with missing required field
            invalid_data = {}
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=invalid_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Error Handling (Invalid POST)", True, 
                            "Correctly validates required fields", response_time)
            else:
                self.log_test("Error Handling (Invalid POST)", False, 
                            f"Expected 422 validation error, got {response.status_code}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Error Handling (Invalid POST)", False, f"Connection error: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS headers are present"""
        try:
            start_time = time.time()
            response = requests.options(f"{API_BASE_URL}/", timeout=10)
            response_time = time.time() - start_time
            
            cors_headers = [
                'access-control-allow-origin',
                'access-control-allow-methods',
                'access-control-allow-headers'
            ]
            
            present_headers = [header for header in cors_headers 
                             if header in [h.lower() for h in response.headers.keys()]]
            
            if len(present_headers) >= 2:  # At least some CORS headers present
                self.log_test("CORS Configuration", True, 
                            f"CORS headers present: {present_headers}", response_time)
            else:
                self.log_test("CORS Configuration", False, 
                            f"Missing CORS headers. Present: {present_headers}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"Connection error: {str(e)}")
    
    def test_performance(self):
        """Test response time performance"""
        response_times = []
        
        for i in range(3):
            try:
                start_time = time.time()
                response = requests.get(f"{API_BASE_URL}/", timeout=10)
                response_time = time.time() - start_time
                response_times.append(response_time)
                
            except requests.exceptions.RequestException:
                pass
        
        if response_times:
            avg_response_time = sum(response_times) / len(response_times)
            max_response_time = max(response_times)
            
            if avg_response_time < 2.0:  # Less than 2 seconds average
                self.log_test("Performance Test", True, 
                            f"Average response time: {avg_response_time:.3f}s, Max: {max_response_time:.3f}s")
            else:
                self.log_test("Performance Test", False, 
                            f"Slow response time - Average: {avg_response_time:.3f}s, Max: {max_response_time:.3f}s")
        else:
            self.log_test("Performance Test", False, "Could not measure response times")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 60)
        print("BACKEND API TESTING SUITE")
        print("=" * 60)
        print(f"Target URL: {API_BASE_URL}")
        print(f"Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("-" * 60)
        
        # Core functionality tests
        self.test_health_check()
        self.test_create_status_check()
        self.test_get_status_checks()
        
        # Error handling tests
        self.test_invalid_endpoints()
        self.test_invalid_post_data()
        
        # Configuration tests
        self.test_cors_headers()
        
        # Performance tests
        self.test_performance()
        
        # Summary
        print("-" * 60)
        print("TEST SUMMARY")
        print("-" * 60)
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests)*100:.1f}%")
        
        if self.failed_tests > 0:
            print("\nFAILED TESTS:")
            for result in self.test_results:
                if "❌" in result['status']:
                    print(f"  - {result['test']}: {result['message']}")
        
        print("=" * 60)
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("🎉 All backend tests passed!")
        sys.exit(0)
    else:
        print("⚠️  Some backend tests failed!")
        sys.exit(1)