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
    
    # ===== CONTACT FORM API TESTS =====
    
    def test_contact_form_valid_submission(self):
        """Test valid contact form submission with all required fields"""
        try:
            test_data = {
                "name": "Sarah Johnson",
                "email": "sarah.johnson@example.com",
                "subject": "Coffee Quality Inquiry",
                "message": "I'm interested in learning more about your premium coffee beans and brewing methods. Could you provide information about your sourcing practices?"
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/contact", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'name', 'email', 'subject', 'message', 'timestamp']
                
                if all(field in data for field in required_fields):
                    # Verify data matches input
                    if (data['name'] == test_data['name'] and 
                        data['email'] == test_data['email'] and
                        data['subject'] == test_data['subject'] and
                        data['message'] == test_data['message']):
                        self.log_test("Contact Form Valid Submission", True, 
                                    f"Contact form submitted successfully with ID: {data['id']}", response_time)
                        return data['id']
                    else:
                        self.log_test("Contact Form Valid Submission", False, 
                                    "Data mismatch in response", response_time)
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test("Contact Form Valid Submission", False, 
                                f"Missing required fields in response: {missing_fields}", response_time)
            else:
                self.log_test("Contact Form Valid Submission", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form Valid Submission", False, f"Connection error: {str(e)}")
        
        return None
    
    def test_contact_form_with_phone(self):
        """Test contact form submission with optional phone field"""
        try:
            test_data = {
                "name": "Michael Chen",
                "email": "michael.chen@example.com",
                "phone": "+1-555-123-4567",
                "subject": "Catering Services",
                "message": "I'm planning a corporate event and would like to discuss catering options for premium coffee service."
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/contact", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if data.get('phone') == test_data['phone']:
                    self.log_test("Contact Form with Phone", True, 
                                f"Contact form with phone submitted successfully", response_time)
                else:
                    self.log_test("Contact Form with Phone", False, 
                                f"Phone field not preserved: expected '{test_data['phone']}', got '{data.get('phone')}'", response_time)
            else:
                self.log_test("Contact Form with Phone", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form with Phone", False, f"Connection error: {str(e)}")
    
    def test_contact_form_missing_required_fields(self):
        """Test error handling for missing required fields"""
        test_cases = [
            ({"email": "test@example.com", "subject": "Test", "message": "Test message"}, "name"),
            ({"name": "Test User", "subject": "Test", "message": "Test message"}, "email"),
            ({"name": "Test User", "email": "test@example.com", "message": "Test message"}, "subject"),
            ({"name": "Test User", "email": "test@example.com", "subject": "Test"}, "message")
        ]
        
        for test_data, missing_field in test_cases:
            try:
                start_time = time.time()
                response = requests.post(f"{API_BASE_URL}/contact", 
                                       json=test_data, 
                                       headers={"Content-Type": "application/json"},
                                       timeout=10)
                response_time = time.time() - start_time
                
                if response.status_code == 422:  # FastAPI validation error
                    self.log_test(f"Missing Required Field ({missing_field})", True, 
                                f"Correctly validates missing {missing_field} field", response_time)
                else:
                    self.log_test(f"Missing Required Field ({missing_field})", False, 
                                f"Expected 422 validation error, got {response.status_code}", response_time)
                    
            except requests.exceptions.RequestException as e:
                self.log_test(f"Missing Required Field ({missing_field})", False, f"Connection error: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test error handling for invalid email format"""
        invalid_emails = ["invalid-email", "test@", "@example.com", "test.example.com"]
        
        for invalid_email in invalid_emails:
            try:
                test_data = {
                    "name": "Test User",
                    "email": invalid_email,
                    "subject": "Test Subject",
                    "message": "This is a test message for email validation."
                }
                
                start_time = time.time()
                response = requests.post(f"{API_BASE_URL}/contact", 
                                       json=test_data, 
                                       headers={"Content-Type": "application/json"},
                                       timeout=10)
                response_time = time.time() - start_time
                
                if response.status_code == 422:  # FastAPI validation error
                    self.log_test(f"Invalid Email ({invalid_email})", True, 
                                f"Correctly validates invalid email format", response_time)
                else:
                    self.log_test(f"Invalid Email ({invalid_email})", False, 
                                f"Expected 422 validation error, got {response.status_code}", response_time)
                    
            except requests.exceptions.RequestException as e:
                self.log_test(f"Invalid Email ({invalid_email})", False, f"Connection error: {str(e)}")
    
    def test_contact_form_message_length_validation(self):
        """Test message length validation (min 10, max 2000 characters)"""
        # Test message too short (less than 10 characters)
        try:
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "Short Message Test",
                "message": "Short"  # Only 5 characters
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/contact", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 422:
                self.log_test("Message Too Short Validation", True, 
                            "Correctly validates message minimum length", response_time)
            else:
                self.log_test("Message Too Short Validation", False, 
                            f"Expected 422 validation error, got {response.status_code}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Message Too Short Validation", False, f"Connection error: {str(e)}")
        
        # Test message too long (more than 2000 characters)
        try:
            long_message = "A" * 2001  # 2001 characters
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "Long Message Test",
                "message": long_message
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/contact", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 422:
                self.log_test("Message Too Long Validation", True, 
                            "Correctly validates message maximum length", response_time)
            else:
                self.log_test("Message Too Long Validation", False, 
                            f"Expected 422 validation error, got {response.status_code}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Message Too Long Validation", False, f"Connection error: {str(e)}")
    
    def test_contact_form_special_characters(self):
        """Test special characters in name and message fields"""
        try:
            test_data = {
                "name": "José María O'Connor-Smith",
                "email": "jose.maria@example.com",
                "subject": "Special Characters Test",
                "message": "Testing special characters: áéíóú, ñ, ç, ü, and symbols like @#$%^&*()!"
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE_URL}/contact", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if (data['name'] == test_data['name'] and 
                    data['message'] == test_data['message']):
                    self.log_test("Special Characters Handling", True, 
                                "Special characters handled correctly", response_time)
                else:
                    self.log_test("Special Characters Handling", False, 
                                "Special characters not preserved correctly", response_time)
            else:
                self.log_test("Special Characters Handling", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Special Characters Handling", False, f"Connection error: {str(e)}")
    
    def test_get_contact_submissions(self):
        """Test retrieving all contact submissions (admin endpoint)"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE_URL}/contact", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get Contact Submissions", True, 
                                f"Retrieved {len(data)} contact submissions", response_time)
                    
                    # Validate structure and ordering
                    if data:
                        first_item = data[0]
                        required_fields = ['id', 'name', 'email', 'subject', 'message', 'timestamp']
                        if all(field in first_item for field in required_fields):
                            self.log_test("Contact Submission Data Structure", True, 
                                        "All required fields present in response")
                            
                            # Check if submissions are in descending timestamp order
                            if len(data) > 1:
                                timestamps = [item['timestamp'] for item in data]
                                is_descending = all(timestamps[i] >= timestamps[i+1] for i in range(len(timestamps)-1))
                                if is_descending:
                                    self.log_test("Contact Submissions Ordering", True, 
                                                "Submissions returned in descending timestamp order")
                                else:
                                    self.log_test("Contact Submissions Ordering", False, 
                                                "Submissions not in descending timestamp order")
                        else:
                            missing_fields = [field for field in required_fields if field not in first_item]
                            self.log_test("Contact Submission Data Structure", False, 
                                        f"Missing fields in response: {missing_fields}")
                else:
                    self.log_test("Get Contact Submissions", False, 
                                f"Expected list, got {type(data)}", response_time)
            else:
                self.log_test("Get Contact Submissions", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Contact Submissions", False, f"Connection error: {str(e)}")
    
    def test_concurrent_contact_submissions(self):
        """Test concurrent contact form submissions"""
        import threading
        import queue
        
        results_queue = queue.Queue()
        
        def submit_contact_form(thread_id):
            try:
                test_data = {
                    "name": f"Concurrent User {thread_id}",
                    "email": f"user{thread_id}@example.com",
                    "subject": f"Concurrent Test {thread_id}",
                    "message": f"This is a concurrent test message from thread {thread_id}. Testing system stability under load."
                }
                
                response = requests.post(f"{API_BASE_URL}/contact", 
                                       json=test_data, 
                                       headers={"Content-Type": "application/json"},
                                       timeout=10)
                
                results_queue.put((thread_id, response.status_code == 200, response.status_code))
                
            except Exception as e:
                results_queue.put((thread_id, False, str(e)))
        
        # Create and start 5 concurrent threads
        threads = []
        for i in range(5):
            thread = threading.Thread(target=submit_contact_form, args=(i+1,))
            threads.append(thread)
            thread.start()
        
        # Wait for all threads to complete
        for thread in threads:
            thread.join()
        
        # Collect results
        successful_submissions = 0
        total_submissions = 0
        
        while not results_queue.empty():
            thread_id, success, status = results_queue.get()
            total_submissions += 1
            if success:
                successful_submissions += 1
        
        if successful_submissions == total_submissions:
            self.log_test("Concurrent Contact Submissions", True, 
                        f"All {total_submissions} concurrent submissions successful")
        else:
            self.log_test("Concurrent Contact Submissions", False, 
                        f"Only {successful_submissions}/{total_submissions} concurrent submissions successful")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 80)
        print("COMPREHENSIVE BACKEND API TESTING SUITE")
        print("=" * 80)
        print(f"Target URL: {API_BASE_URL}")
        print(f"Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("-" * 80)
        
        # Core functionality tests
        print("\n🔍 CORE API FUNCTIONALITY TESTS")
        print("-" * 40)
        self.test_health_check()
        self.test_create_status_check()
        self.test_get_status_checks()
        
        # Contact Form API Tests
        print("\n📧 CONTACT FORM API TESTS")
        print("-" * 40)
        self.test_contact_form_valid_submission()
        self.test_contact_form_with_phone()
        self.test_get_contact_submissions()
        
        # Validation Tests
        print("\n✅ VALIDATION TESTS")
        print("-" * 40)
        self.test_contact_form_missing_required_fields()
        self.test_contact_form_invalid_email()
        self.test_contact_form_message_length_validation()
        self.test_contact_form_special_characters()
        
        # Error handling tests
        print("\n⚠️  ERROR HANDLING TESTS")
        print("-" * 40)
        self.test_invalid_endpoints()
        self.test_invalid_post_data()
        
        # Integration Tests
        print("\n🔗 INTEGRATION TESTS")
        print("-" * 40)
        self.test_concurrent_contact_submissions()
        
        # Configuration tests
        print("\n⚙️  CONFIGURATION TESTS")
        print("-" * 40)
        self.test_cors_headers()
        
        # Performance tests
        print("\n🚀 PERFORMANCE TESTS")
        print("-" * 40)
        self.test_performance()
        
        # Summary
        print("-" * 80)
        print("TEST SUMMARY")
        print("-" * 80)
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests)*100:.1f}%")
        
        if self.failed_tests > 0:
            print("\nFAILED TESTS:")
            for result in self.test_results:
                if "❌" in result['status']:
                    print(f"  - {result['test']}: {result['message']}")
        
        print("=" * 80)
        
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