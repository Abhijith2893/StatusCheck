docker run \
-v $PWD:/e2e \
-w /e2e \
--entrypoint npm \
cypress/included:4.4.1 \
run cy:run
