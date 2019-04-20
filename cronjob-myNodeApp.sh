#!/bin/sh

PATH="~/.nvm/versions/node/v11.14.0/bin:$PATH"

~/.nvm/versions/node/v11.14.0/bin/npm --prefix /home/ec2-user/StatusCheck run cy:run
