#!/usr/bin/env python3
"""
NUS ISS Learning Hub Launcher
Starts a local web server and opens the interactive learning platform in your default browser.
"""

import os
import sys
import webbrowser
import http.server
import socketserver
import argparse

DEFAULT_PORT = 8080

def check_files():
    print("Checking platform integrity...")
    required_files = [
        "index.html",
        "core/styles.css",
        "core/app.js",
        "core/audio.js",
        "core/visualizers.js",
        "core/dtw-engine.js",
        "core/quiz-engine.js",
        "core/research-hub.js",
        "courses/courses.json",
        "courses/intelligent-sensing-systems/course.json",
        "courses/intelligent-sensing-systems/day-1-signals/module.json",
        "courses/intelligent-sensing-systems/day-1-signals/data.js",
        "courses/intelligent-sensing-systems/day-1-signals/quizzes.js",
        "courses/intelligent-sensing-systems/day-1-signals/research.js",
        "courses/intelligent-sensing-systems/day-1-signals/content.js",
        "vendor/katex/katex.min.css",
        "vendor/katex/katex.min.js",
        "vendor/katex/auto-render.min.js",
        "vendor/lucide/lucide.min.js",
    ]
    script_dir = os.path.dirname(os.path.abspath(__file__))
    missing = []
    for rf in required_files:
        p = os.path.join(script_dir, rf)
        if not os.path.isfile(p):
            missing.append(rf)

    if missing:
        print(f"Error: Missing {len(missing)} files: {missing}")
        return False
    print("All core platform files verified successfully! [OK]")
    return True

def run_server(port=DEFAULT_PORT, open_browser=True):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            # Disable caching for live interactive development
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
            super().end_headers()

    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(("", p), CustomHandler) as httpd:
                url = f"http://localhost:{p}/index.html"
                print("\n=======================================================")
                print("   NUS ISS Learning Hub — Interactive Platform")
                print("=======================================================")
                print(f" * Server running at: {url}")
                print(" * Press Ctrl+C to stop.")
                print("=======================================================\n")
                if open_browser:
                    webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="NUS ISS Learning Hub Launcher")
    parser.add_argument("--test", action="store_true", help="Perform integrity check without starting server")
    parser.add_argument("--port", type=int, default=DEFAULT_PORT, help="Port to bind server to")
    parser.add_argument("--no-browser", action="store_true", help="Do not automatically launch web browser")
    args = parser.parse_args()

    if args.test:
        success = check_files()
        sys.exit(0 if success else 1)

    if not check_files():
        sys.exit(1)

    run_server(port=args.port, open_browser=not args.no_browser)
