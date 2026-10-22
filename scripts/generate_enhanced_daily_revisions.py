import os
import subprocess

# Calls the authoritative Node.js script to generate daily-revisions.js
script_path = os.path.join(os.path.dirname(__file__), "build_enhanced_daily_revisions.js")
subprocess.run(["node", script_path], check=True)
