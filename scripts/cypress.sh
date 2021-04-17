docker run \
-v $HOME/StatusCheck:/e2e \
-v ~/.aws:/root/.aws \
-w /e2e \
--entrypoint npm \
cypress/included:4.4.1 \
run cy:run
