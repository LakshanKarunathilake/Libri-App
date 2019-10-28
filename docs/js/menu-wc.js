'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Libri documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link">AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutPageModule-d8a85a5fb4ca38a079329f9a8f90b13a"' : 'data-target="#xs-components-links-module-AboutPageModule-d8a85a5fb4ca38a079329f9a8f90b13a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-d8a85a5fb4ca38a079329f9a8f90b13a"' :
                                            'id="xs-components-links-module-AboutPageModule-d8a85a5fb4ca38a079329f9a8f90b13a"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountPageModule.html" data-type="entity-link">AccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountPageModule-c2fc7d3550f417c6a5120469488e4508"' : 'data-target="#xs-components-links-module-AccountPageModule-c2fc7d3550f417c6a5120469488e4508"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountPageModule-c2fc7d3550f417c6a5120469488e4508"' :
                                            'id="xs-components-links-module-AccountPageModule-c2fc7d3550f417c6a5120469488e4508"' }>
                                            <li class="link">
                                                <a href="components/AccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BorrowingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BorrowingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PenaltyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PenaltyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountTabMenuComponentModule.html" data-type="entity-link">AccountTabMenuComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountTabMenuComponentModule-5cd3008a6fa629104531adb93c8617ec"' : 'data-target="#xs-components-links-module-AccountTabMenuComponentModule-5cd3008a6fa629104531adb93c8617ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountTabMenuComponentModule-5cd3008a6fa629104531adb93c8617ec"' :
                                            'id="xs-components-links-module-AccountTabMenuComponentModule-5cd3008a6fa629104531adb93c8617ec"' }>
                                            <li class="link">
                                                <a href="components/AccountTabMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountTabMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnimatedTextComponentModule.html" data-type="entity-link">AnimatedTextComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnimatedTextComponentModule-99b366242cb3b1ad6f141bbf85ea639e"' : 'data-target="#xs-components-links-module-AnimatedTextComponentModule-99b366242cb3b1ad6f141bbf85ea639e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnimatedTextComponentModule-99b366242cb3b1ad6f141bbf85ea639e"' :
                                            'id="xs-components-links-module-AnimatedTextComponentModule-99b366242cb3b1ad6f141bbf85ea639e"' }>
                                            <li class="link">
                                                <a href="components/AnimatedTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimatedTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' : 'data-target="#xs-components-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' :
                                            'id="xs-components-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' : 'data-target="#xs-injectables-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' :
                                        'id="xs-injectables-links-module-AppModule-9fcaf9b16161732f7d16daca92ba0be3"' }>
                                        <li class="link">
                                            <a href="injectables/EventLoggerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventLoggerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FcmService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FcmService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalNotificationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlatformService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PlatformService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SwalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SwalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BooksearchPageModule.html" data-type="entity-link">BooksearchPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooksearchPageModule-c7a282704eb301433e9cdc5631b6d623"' : 'data-target="#xs-components-links-module-BooksearchPageModule-c7a282704eb301433e9cdc5631b6d623"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksearchPageModule-c7a282704eb301433e9cdc5631b6d623"' :
                                            'id="xs-components-links-module-BooksearchPageModule-c7a282704eb301433e9cdc5631b6d623"' }>
                                            <li class="link">
                                                <a href="components/BookSearchView.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookSearchView</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BooksearchPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BooksearchPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaptchaComponentModule.html" data-type="entity-link">CaptchaComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CaptchaComponentModule-6ec12a02d43be09be1cda060df8d1b8a"' : 'data-target="#xs-components-links-module-CaptchaComponentModule-6ec12a02d43be09be1cda060df8d1b8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CaptchaComponentModule-6ec12a02d43be09be1cda060df8d1b8a"' :
                                            'id="xs-components-links-module-CaptchaComponentModule-6ec12a02d43be09be1cda060df8d1b8a"' }>
                                            <li class="link">
                                                <a href="components/CaptchaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaptchaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackPageModule.html" data-type="entity-link">FeedbackPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeedbackPageModule-f54a31e941dd442a1a3f6dbb5723fa0b"' : 'data-target="#xs-components-links-module-FeedbackPageModule-f54a31e941dd442a1a3f6dbb5723fa0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedbackPageModule-f54a31e941dd442a1a3f6dbb5723fa0b"' :
                                            'id="xs-components-links-module-FeedbackPageModule-f54a31e941dd442a1a3f6dbb5723fa0b"' }>
                                            <li class="link">
                                                <a href="components/FeedbackPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-195df3362558852e66a629a953fcb83c"' : 'data-target="#xs-components-links-module-HomePageModule-195df3362558852e66a629a953fcb83c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-195df3362558852e66a629a953fcb83c"' :
                                            'id="xs-components-links-module-HomePageModule-195df3362558852e66a629a953fcb83c"' }>
                                            <li class="link">
                                                <a href="components/CollapsibleListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsibleListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoPageModule.html" data-type="entity-link">InfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoPageModule-66a80722f43cabfb880d001e3db596d1"' : 'data-target="#xs-components-links-module-InfoPageModule-66a80722f43cabfb880d001e3db596d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoPageModule-66a80722f43cabfb880d001e3db596d1"' :
                                            'id="xs-components-links-module-InfoPageModule-66a80722f43cabfb880d001e3db596d1"' }>
                                            <li class="link">
                                                <a href="components/InfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-045fca47d02863cd991c88c364245292"' : 'data-target="#xs-components-links-module-LoginPageModule-045fca47d02863cd991c88c364245292"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-045fca47d02863cd991c88c364245292"' :
                                            'id="xs-components-links-module-LoginPageModule-045fca47d02863cd991c88c364245292"' }>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuPageModule.html" data-type="entity-link">MenuPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' : 'data-target="#xs-components-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' :
                                            'id="xs-components-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' }>
                                            <li class="link">
                                                <a href="components/MenuPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' : 'data-target="#xs-injectables-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' :
                                        'id="xs-injectables-links-module-MenuPageModule-97961b3ccf0381dab51e2e6190dc65f4"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BookService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileUploadService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FileUploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuTitleComponentModule.html" data-type="entity-link">MenuTitleComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuTitleComponentModule-50f3c4477a16ee613691a37faf1a07b0"' : 'data-target="#xs-components-links-module-MenuTitleComponentModule-50f3c4477a16ee613691a37faf1a07b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuTitleComponentModule-50f3c4477a16ee613691a37faf1a07b0"' :
                                            'id="xs-components-links-module-MenuTitleComponentModule-50f3c4477a16ee613691a37faf1a07b0"' }>
                                            <li class="link">
                                                <a href="components/MenuTitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewPageModule.html" data-type="entity-link">OverviewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OverviewPageModule-534e58274f774956d664e7240ce9a656"' : 'data-target="#xs-components-links-module-OverviewPageModule-534e58274f774956d664e7240ce9a656"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OverviewPageModule-534e58274f774956d664e7240ce9a656"' :
                                            'id="xs-components-links-module-OverviewPageModule-534e58274f774956d664e7240ce9a656"' }>
                                            <li class="link">
                                                <a href="components/OverviewPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestbookPageModule.html" data-type="entity-link">RequestbookPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' : 'data-target="#xs-components-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' :
                                            'id="xs-components-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                            <li class="link">
                                                <a href="components/FileuploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileuploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestbookPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestbookPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' : 'data-target="#xs-directives-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' :
                                        'id="xs-directives-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                        <li class="link">
                                            <a href="directives/DropZoneDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropZoneDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' : 'data-target="#xs-pipes-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' :
                                            'id="xs-pipes-links-module-RequestbookPageModule-d55b8aa122494a82c33b4a96def0f4c8"' }>
                                            <li class="link">
                                                <a href="pipes/FileSizePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileSizePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageModule.html" data-type="entity-link">SignupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' : 'data-target="#xs-components-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' :
                                            'id="xs-components-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' }>
                                            <li class="link">
                                                <a href="components/SignupPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' : 'data-target="#xs-injectables-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' :
                                        'id="xs-injectables-links-module-SignupPageModule-54ec29b19dfb46360057b1c420afb2f9"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransferPageModule.html" data-type="entity-link">TransferPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TransferPageModule-22a3d5dcb87cd1cbd193c7d2f8325f42"' : 'data-target="#xs-components-links-module-TransferPageModule-22a3d5dcb87cd1cbd193c7d2f8325f42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransferPageModule-22a3d5dcb87cd1cbd193c7d2f8325f42"' :
                                            'id="xs-components-links-module-TransferPageModule-22a3d5dcb87cd1cbd193c7d2f8325f42"' }>
                                            <li class="link">
                                                <a href="components/ItemTransferComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemTransferComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransferPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransferPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AngularFireAuthStub.html" data-type="entity-link">AngularFireAuthStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/AngularFireFunctionsStub.html" data-type="entity-link">AngularFireFunctionsStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookServiceStub.html" data-type="entity-link">BookServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventLoggerServiceStub.html" data-type="entity-link">EventLoggerServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/FcmServiceStub.html" data-type="entity-link">FcmServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadServiceStub.html" data-type="entity-link">FileUploadServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/OverallServiceStub.html" data-type="entity-link">OverallServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwalServiceStub.html" data-type="entity-link">SwalServiceStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserServiceStub.html" data-type="entity-link">UserServiceStub</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link">BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomValidatorService.html" data-type="entity-link">CustomValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventLoggerService.html" data-type="entity-link">EventLoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FcmService.html" data-type="entity-link">FcmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileUploadService.html" data-type="entity-link">FileUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebasePerformanceService.html" data-type="entity-link">FirebasePerformanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalNotificationService.html" data-type="entity-link">LocalNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OverallService.html" data-type="entity-link">OverallService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlatformService.html" data-type="entity-link">PlatformService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SwalService.html" data-type="entity-link">SwalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link">Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookRequest.html" data-type="entity-link">BookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Borrowing.html" data-type="entity-link">Borrowing</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feedback.html" data-type="entity-link">Feedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notice.html" data-type="entity-link">Notice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topic.html" data-type="entity-link">Topic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});