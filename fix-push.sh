#!/bin/bash
set -e
find .git -name "*.lock" -delete 2>/dev/null || true
git pull origin main --no-rebase --allow-unrelated-histories -X ours
git push origin main
echo "Done — code is now on GitHub."
