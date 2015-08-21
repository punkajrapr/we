#Request life

- Set default vars
- Set custom response functions
- Set express engine configs
- Set response layout
- Load morgan debuger ( dev or test env )
- Body parser middleware
- Cookie parser middleware
- Session store middleware ( todo remove from token requests )
- Set flash messages ( todo remove from token requests )
- Run CORS Middleware
- if are a public file request the file from public folders
- Run passport middlewares
- if are admin, return with admin page
- Set i18n configs
- Run the we.url middleware
- Run context loader middleware
- Run ACL middleware
- Run Group ACL middleware
- Run upload middleware ( if in current route config )
- Run controller
- Run send response middleware
  - send response in JSON or HTML
  - if are a HTML response
    - Render the html page with project index.hbs file