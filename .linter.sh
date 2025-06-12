#!/bin/bash
cd /home/kavia/workspace/code-generation/minimayhem-arcade-hub-28484-0cc56206/minimayhem_arcade_hub
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

