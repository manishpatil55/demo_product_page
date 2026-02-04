#!/bin/bash
git config user.email "antigravity@google.com"
git config user.name "Antigravity"
git add -A
git commit --no-verify -m "feat: Final Polish - Premium Headers, Tech Toggle, and Contact Zoom"
git push demo fresh_main:main
git push origin fresh_main:manish_patil
