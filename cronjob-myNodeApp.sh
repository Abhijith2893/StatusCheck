#!/bin/sh

PATH=$PATH:$HOME/.local/bin:$HOME/bin:/home/ec2-user/.nvm/versions/node/v11.14.0/bin

~/.nvm/versions/node/v11.14.0/bin/npm --prefix ~/StatusCheck run cy:run
