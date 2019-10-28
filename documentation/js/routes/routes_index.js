var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","loadChildren":"./login/login.module#LoginPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/login/login.module.ts","module":"LoginPageModule","children":[{"path":"","component":"LoginPage"}],"kind":"module"}],"module":"LoginPageModule"}]},{"path":"signup","loadChildren":"./signup/signup.module#SignupPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/signup/signup.module.ts","module":"SignupPageModule","children":[{"path":"","component":"SignupPage"}],"kind":"module"}],"module":"SignupPageModule"}]},{"path":"menu","loadChildren":"./menu/menu.module#MenuPageModule","canActivate":["AngularFireAuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/menu/menu.module.ts","module":"MenuPageModule","children":[{"path":"","component":"MenuPage","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"feedback","loadChildren":"../feedback/feedback.module#FeedbackPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/feedback/feedback.module.ts","module":"FeedbackPageModule","children":[{"path":"","component":"FeedbackPage"}],"kind":"module"}],"module":"FeedbackPageModule"}]},{"path":"booksearch","loadChildren":"../booksearch/booksearch.module#BooksearchPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/booksearch/booksearch.module.ts","module":"BooksearchPageModule","children":[{"path":"","component":"BooksearchPage"}],"kind":"module"}],"module":"BooksearchPageModule"}]},{"path":"requestbook","loadChildren":"../requestbook/requestbook.module#RequestbookPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/requestbook/requestbook.module.ts","module":"RequestbookPageModule","children":[{"path":"","component":"RequestbookPage"}],"kind":"module"}],"module":"RequestbookPageModule"}]},{"path":"home","loadChildren":"../home/home.module#HomePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home.module.ts","module":"HomePageModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"account","loadChildren":"../account/account.module#AccountPageModule","children":[{"kind":"module","children":[],"module":"AccountPageModule"}]},{"path":"info","loadChildren":"../LibraryInfo/info/info.module#InfoPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/LibraryInfo/info/info.module.ts","module":"InfoPageModule","children":[{"path":"","component":"InfoPage","children":[{"path":"","redirectTo":"overview","pathMatch":"full"},{"path":"about","loadChildren":"../about/about.module#AboutPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/LibraryInfo/about/about.module.ts","module":"AboutPageModule","children":[{"path":"","component":"AboutPage"}],"kind":"module"}],"module":"AboutPageModule"}]},{"path":"overview","loadChildren":"../overview/overview.module#OverviewPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/LibraryInfo/overview/overview.module.ts","module":"OverviewPageModule","children":[{"path":"","component":"OverviewPage"}],"kind":"module"}],"module":"OverviewPageModule"}]}]}],"kind":"module"}],"module":"InfoPageModule"}]},{"path":"transfer","loadChildren":"../transfer/transfer.module#TransferPageModule","children":[{"kind":"module","children":[],"module":"TransferPageModule"}]}]}],"kind":"module"}],"module":"MenuPageModule"}]}],"kind":"module"}]}
