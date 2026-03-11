# repro for hey-api/openapi-ts#3550

- Change config to `{ name: "@angular/common", httpRequests: 'flat' }` to re-enable Angular requests output (should be default)
- Change config to `{ name: "@angular/common", httpResources: 'flat' }` to see the build break
- Install @hey-api/openapi-ts@0.98.0 to make it work without manual config again
