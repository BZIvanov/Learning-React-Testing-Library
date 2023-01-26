## act

`act` is used for async updates. If we get errors when using with RTL, it means that we should not use act in our tests, but use RTL methods which are using act under the hood. Usually if we get act warnings/errors it means, that we should use `findBy` RTL methods or user events like `click` or some other async method which is using act under the hood.
