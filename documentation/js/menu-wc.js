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
                                            'data-target="#components-links-module-AccountPageModule-7c3a4ef1f7673d49629f3c026a7adb45"' : 'data-target="#xs-components-links-module-AccountPageModule-7c3a4ef1f7673d49629f3c026a7adb45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountPageModule-7c3a4ef1f7673d49629f3c026a7adb45"' :
                                            'id="xs-components-links-module-AccountPageModule-7c3a4ef1f7673d49629f3c026a7adb45"' }>
                                            <li class="link">
                                                <a href="components/AccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' : 'data-target="#xs-components-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' :
                                            'id="xs-components-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' : 'data-target="#xs-injectables-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' :
                                        'id="xs-injectables-links-module-AppModule-c14953b373f382109431fb97b963e6f4"' }>
                                        <li class="link">
                                            <a href="injectables/FcmService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FcmService</a>
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
                                            'data-target="#components-links-module-BooksearchPageModule-8d17909b53c7f592231887f6a41593cd"' : 'data-target="#xs-components-links-module-BooksearchPageModule-8d17909b53c7f592231887f6a41593cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksearchPageModule-8d17909b53c7f592231887f6a41593cd"' :
                                            'id="xs-components-links-module-BooksearchPageModule-8d17909b53c7f592231887f6a41593cd"' }>
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
                                            'data-target="#components-links-module-FeedbackPageModule-f905fd2e3a4b6dc27f92be1b7b09efcb"' : 'data-target="#xs-components-links-module-FeedbackPageModule-f905fd2e3a4b6dc27f92be1b7b09efcb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedbackPageModule-f905fd2e3a4b6dc27f92be1b7b09efcb"' :
                                            'id="xs-components-links-module-FeedbackPageModule-f905fd2e3a4b6dc27f92be1b7b09efcb"' }>
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
                                            'data-target="#components-links-module-HomePageModule-edec4bcb4668c8bb29325264cb161196"' : 'data-target="#xs-components-links-module-HomePageModule-edec4bcb4668c8bb29325264cb161196"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-edec4bcb4668c8bb29325264cb161196"' :
                                            'id="xs-components-links-module-HomePageModule-edec4bcb4668c8bb29325264cb161196"' }>
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
                                            'data-target="#components-links-module-MenuPageModule-5ad94724a15cc8a5e97c7885f910cf83"' : 'data-target="#xs-components-links-module-MenuPageModule-5ad94724a15cc8a5e97c7885f910cf83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuPageModule-5ad94724a15cc8a5e97c7885f910cf83"' :
                                            'id="xs-components-links-module-MenuPageModule-5ad94724a15cc8a5e97c7885f910cf83"' }>
                                            <li class="link">
                                                <a href="components/MenuPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPage</a>
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
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-0bc49d083224e3979d9a593181538217"' : 'data-target="#xs-components-links-module-ProfilePageModule-0bc49d083224e3979d9a593181538217"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-0bc49d083224e3979d9a593181538217"' :
                                            'id="xs-components-links-module-ProfilePageModule-0bc49d083224e3979d9a593181538217"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestbookPageModule.html" data-type="entity-link">RequestbookPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequestbookPageModule-19888de6965ace3887d66b3c58e8b8e3"' : 'data-target="#xs-components-links-module-RequestbookPageModule-19888de6965ace3887d66b3c58e8b8e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestbookPageModule-19888de6965ace3887d66b3c58e8b8e3"' :
                                            'id="xs-components-links-module-RequestbookPageModule-19888de6965ace3887d66b3c58e8b8e3"' }>
                                            <li class="link">
                                                <a href="components/RequestbookPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestbookPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageModule.html" data-type="entity-link">SignupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupPageModule-2b49ab20228534bde5b1724deaa6f8e6"' : 'data-target="#xs-components-links-module-SignupPageModule-2b49ab20228534bde5b1724deaa6f8e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupPageModule-2b49ab20228534bde5b1724deaa6f8e6"' :
                                            'id="xs-components-links-module-SignupPageModule-2b49ab20228534bde5b1724deaa6f8e6"' }>
                                            <li class="link">
                                                <a href="components/SignupPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransferPageModule.html" data-type="entity-link">TransferPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TransferPageModule-e3b5c968f5245e0de47cb59ccfa3e89d"' : 'data-target="#xs-components-links-module-TransferPageModule-e3b5c968f5245e0de47cb59ccfa3e89d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransferPageModule-e3b5c968f5245e0de47cb59ccfa3e89d"' :
                                            'id="xs-components-links-module-TransferPageModule-e3b5c968f5245e0de47cb59ccfa3e89d"' }>
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
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FcmService.html" data-type="entity-link">FcmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormValidationService.html" data-type="entity-link">FormValidationService</a>
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