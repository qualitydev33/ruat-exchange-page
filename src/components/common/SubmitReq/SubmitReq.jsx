import {useState, useEffect} from 'react'
import {
    BsCheck2,
    BsPlusLg,
    BsXLg,
} from '../../icon/IconImage'
import CustomCheckbox from '../../ui/CustomCheckbox'
import SelectInput from '../../ui/SelectInput'

const SubmitReq = () => {
    const requestOption = [
        {title: '1 - [New Listing] Add cryptoasset'},
        {title: '2 - [New Listing] Add exchange'},
        {title: '3 - [Existing Cryptoasset & Exchange] Add market/pair'},
        {title: '4 - [Existing Cryptoasset] Update supply figures'},
        {title: '5 - [Existing Cryptoasset] Coin/Token Swap'},
        {title: '6 - [Existing Exchange] Update info (e.g. Fiat on-ramp, Rebrand, API update)'},
        {title: '7 - [Existing Cryptoasset] Update info (e.g. Rebrand, URL update, Tagging)'},
        {title: '8 - [DATA - Self-reporting Portal] EXISTING cryptoassets (official representatives only)'},
        {title: '9 - [DATA - Self-reporting Portal] EXISTING exchanges (official representatives only)'},
        {title: '10 - Add a new event to the events calendar'},
        {title: '11 - Report a bug'},
        {title: '12 - Feedback/Questions/Complaints'},
        {title: '13 - Feature Request'},
        {title: '14 - [New Listing] Add Interest Product [Under Maintenance]'},
        {title: '15 - [Headlines by CoinMarketCap] Application [Under maintenance]'},
        {title: '16 - CoinMarketCap API Inquiries [pro.coinmarketcap.com]'},
        {title: '17 - Earn Campaign'},
        {title: '18 - CMC Airdrop Campaign'},
        {title: '19 - Mobile App Support [iOS and Android]'},
    ]
    const selectOptions = [
        {title: 'option 1'},
        {title: 'option 2'},
        {title: 'option 3'},
    ]

    const requestForm = [
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18', label: 'Your email address', field_name: 'email', type: 'input', input_type: 'text'},
        {requestOptionIdx: '13, 14', label: 'Under Maintenance', field_name: 'under_maintenance', type: 'checkbox'},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18', label: 'Subject Field', sub_label: 'Please adhere to the format', field_name: 'subject', type: 'input', input_type: 'text', desc: "Please refer to this format as an example. [Project's full name] - [Symbol] - [Request, e.g. Add Market, Add cryptoasset/exchange, Update cryptoasset/exchange, update supply]"},
        {requestOptionIdx: '7', label: "[Self-reporting] Pages to manage", type: 'textarea', field_name: 'page_manage', type: 'textarea', desc: <span>Please insert the URLs of all the pages that you want to manage. For example, if you are a representative from Chiliz, kindly provide all the CMC URLs that you intend to manage, e.g. <a href="https://coinmarketcap.com/currencies/paris-saint-germain-fan-token/" className='text-c_1564C0'>https://coinmarketcap.com/currencies/paris-saint-germain-fan-token/</a>, <a href="https://coinmarketcap.com/currencies/chiliz/" className='text-c_1564C0'>https://coinmarketcap.com/currencies/chiliz/</a>, <a href="https://coinmarketcap.com/currencies/galatasaray-fan-token/" className='text-c_1564C0'>https://coinmarketcap.com/currencies/galatasaray-fan-token/</a></span>},
        {requestOptionIdx: '7, 14', label: "List of Administrator email(s) used for CMC log-in", field_name: 'list_admin', type: 'textarea', desc: <span>(1) Register and verify the relevant CMC account(s) using the project's work email address(es) here - <a href="https://tinyurl.com/y859xnwj" className='text-c_1564C0'>https://tinyurl.com/y859xnwj</a>. (2) In this form, provide the email address(es) associated with the relevant CMC log-ins. The domain name should ideally be the same as your project, i.e. if the project is called happycoin, the email should ideally be <a href="example@happycoin.com" className='text-c_1564C0'>example@happycoin.com</a></span>},
        {requestOptionIdx: '7', label: "[Self-reporting] Public post for verification", field_name: 'public_post', type: 'textarea', desc: <span>(1) Make a public post using one of the accounts (e.g. social media) associated with the project's CMC page. (2) Suppose that you are a member of the Synthetix team. Using the Twitter account on the Synthetix CMC page (<a href='https://tinyurl.com/y7pls7x8' className='text-c_1564C0'>https://tinyurl.com/y7pls7x8</a>), make a tweet indicating that you would like to register [insert email address(es)] to manage the project's self-reporting dashboard. If you have security concerns, posting the domain name (e.g. @projectname.com) and the number of employees that registered a CMC account using those email domains will suffice. (3) Provide a DIRECT link to the public post (e.g. tweet/blog post) in this form. This will be used for the verification and onboarding process. See example: <a href="https://tinyurl.com/y7oalaxo." className='text-c_1564C0'>https://tinyurl.com/y7oalaxo.</a></span>},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 11, 13', label: 'Methodology Review', type: 'checkbox', field_name: 'review', desc: <span>I declare that I have read, understood, and fully agree to the terms and conditions stipulated at <span className='text-c_1564C0'><a href="https://altsome/methodology/">https://altsome/methodology/</a></span></span>},
        {requestOptionIdx: '14', label: 'Can we contact you about using CMC data to power price trackers, etc. on your site?', field_name: 'contact_cmc_track', type: 'checkbox'},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14', label: 'Support Terms', field_name: 'support_terms', type: 'checkbox', desc: 'I acknowledge that CoinMarketCap reserves the right, in their sole discretion, to determine the suitability of my request for the site. In the event that CoinMarketCap rejects my request, I acknowledge that CoinMarketCap is not obligated to inform me or provide any reasons for such refusal.'},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14', label: 'Accuracy Declaration', field_name: 'declaration', type: 'checkbox', desc:'I declare that the information provided on the form is accurate and complete to the best of my knowledge and that failure to fulfill these requirements may render my request inadmissible.'},
        {requestOptionIdx: '2', label: 'Market Type', field_name: 'market_type', type: 'select', options: selectOptions, desc: "Please indicate whether the market is classified as 'Spot', 'Perpetual swap', 'Options', or 'Physically-delivered futures'."},
        {requestOptionIdx: '2', label: 'USD$1000 Volume (24-hr)', field_name: 'usd1000_vol', type: 'checkbox', desc: 'I have checked and verified that the market(s)/pair(s) have at least USD$1000 trading volume (24-hr).'},
        {requestOptionIdx: '2, 3, 4, 5, 6, 7', label: "Project(s)' CMC URL(s)", field_name: 'project_cmc', type: 'textarea', desc: <span>Example: If you are looking to update information for Chainlink on CoinMarketCap, please provide the following link: <a href="https://coinmarketcap.com/currencies/chainlink" className='text-c_1564C0'>https://coinmarketcap.com/currencies/chainlink</a>. If you are unable to provide CMC URL(s), please FIRST submit a request to add a NEW cryptoasset/exchange.</span>},
        {requestOptionIdx: '5, 6', label: "Describe what you would like us to update/address.", field_name: 'describe', type: 'textarea', desc: <span>Be (i) specific, (ii) detailed, and (iii) concise. Review our data admissibility guidelines to understand our policies and the standard of proof required - (<a href='https://coinmarketcap.zendesk.com/hc/en-us/articles/360034124351-Listings-Criteria' className='text-c_1564C0'>https://coinmarketcap.zendesk.com/hc/en-us/articles/360034124351-Listings-Criteria</a>).</span>},
        {requestOptionIdx: '2', label: "Direct Link to Market(s)/Pair(s)", field_name: 'direct_link', type: 'textarea', desc: <span>Provide valid URLs that link directly to the specific market(s)/pair(s), rather than the exchange. For example, <a href="https://www.binance.com/en/trade/pro/BTC_USDT" className='text-c_1564C0'>https://www.binance.com/en/trade/pro/BTC_USDT</a> INSTEAD of <a href="www.binance.com" className='text-c_1564C0'>www.binance.com</a>.</span>},
        {requestOptionIdx: '0, 1', label: 'Listings Disclaimer', field_name: 'disclaimer', type: 'checkbox', desc: 'CoinMarketCap listings are always free. Please beware of spoofed emails, fake social accounts, or individuals requesting listing fees. Anyone asking you to pay a fee or tip for getting your project listed on CoinMarketCap is definitely not sanctioned to do so. We also do not sanction any listing service to assist in the listing application of any cryptoasset project or exchange - t.ly/J6Tz'},
        {requestOptionIdx: '0, 1, 7', label: 'Relationship with the Project', field_name: 'relationship', type: 'textarea', desc: 'Please describe your relationship with the project (e.g. CEO, founder, employee, community member and exchange)'},
        {requestOptionIdx: '1', label: 'Launch Date (Exchange)', field_name: 'exchange_launch_date', type: 'input', input_type: 'text'},
        {requestOptionIdx: '0', label: 'Project Launch Date', field_name: 'launch_date', type: 'input', input_type: 'text', desc: 'The date the project launched (e.g. token sale, genesis block, formation of company, drafting of business plan) Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '0, 1, 13', label: 'Project Name', field_name: 'project_name', type: 'input', input_type: 'text', desc: 'Please provide the FULL name of the project (e.g. Bitcoin, Ethereum, Ripple, Holochain, Binance, Bittrex).'},
        {requestOptionIdx: '1, 13', label: "Previous Names/Aliases (Type 'NA' if not applicable)(optional)", field_name: 'previous_name', type: 'input', input_type: 'text'},
        {requestOptionIdx: '13', label: "Launch date of service", field_name: 'launch_date_service', type: "input", input_type: 'text'},
        {requestOptionIdx: '1', label: "Affiliation with other exchanges (Type 'NA' if not applicable)(optional)", field_name: 'affiliation', type: 'input', input_type: 'text'},
        {requestOptionIdx: '1', label: "Shared liquidity pool/order books with other exchanges (Type 'NA' if not applicable)(optional)", field_name: 'shared_liquidity', type: 'textarea', desc: 'Where possible, substantiate your points with evidence from credible, independently verifiable sources.'},
        {requestOptionIdx: '1, 13', label: "Project Description (Exchanges)", field_name: 'exchange_project_desc', type: 'textarea', desc: <span>Our data shows that our users spend more time on pages that use descriptions that adhere to this template: <a href="https://tinyurl.com/yy2mw9v7" className='text-c_1564C0'>https://tinyurl.com/yy2mw9v7</a>. Recommended word count: 450 - 600 words. Minimize the use of hyperbole, superlatives, and redundant statements (e.g. leading, amazing, best, first of its kind, state of the art, decentralized blockchain). It should not read like a sales pitch. Sample 1: <a href="https://coinmarketcap.com/exchanges/luno/" className='text-c_1564C0'>https://coinmarketcap.com/exchanges/luno/</a>. Sample 2: <a href="https://coinmarketcap.com/exchanges/liquid/" className='text-c_1564C0'>https://coinmarketcap.com/exchanges/liquid/</a>. Launched on [dd/mm/yyyy], ___ is a (de)centralized exchange based in [office address/country]. It supports __ fiat pairs/fiat deposits/fiat withdrawals/derivatives/futures/options/lending/OTC/IEOs. It is licensed by [regulator, e.g. FINMA].</span>},
        {requestOptionIdx: '0', label: 'Project Ticker/Symbol', field_name: 'ticker', type: 'input', input_type: 'text', desc: '(e.g. BTC, ETH, XRP, HOT)'},
        {requestOptionIdx: '0', label: 'Cryptoasset Tags - Sector/Categories', field_name: 'tag', type: 'select', options: selectOptions, desc: 'You may select more than one tag. Doing so would allow users to filter assets by category membership.'},
        {requestOptionIdx: '0', label: 'One liner description', field_name: 'liner_desc', type: 'input', input_type: 'text', desc: <span>Provide a snappy and concise tagline for the project. E,g, KAVA - A Cross-Chain Platform for Decentralized Finance. Band Protocol - Secure and scalable decentralized oracle for Web3.0. See more examples here:<span className='text-c_1564C0'><a href="https://research.binance.com/">https://research.binance.com/</a></span></span>},
        {requestOptionIdx: '0', label: 'Detailed Project Description (Cryptoasset)', field_name: 'project_desc', type: 'textarea', desc: <span>Our data shows that our users spend more time on pages that use descriptions that adhere to this template: <span className='text-c_1564C0'><a href="https://tinyurl.com/yy2mw9v7">https://tinyurl.com/yy2mw9v7</a></span>. Recommended word count: 450 - 600 words. Provide a detailed description of your project, which may be used on the asset page (<span className='text-c_1564C0'><a href="https://coinmarketcap.com/currencies/cardano/">https://coinmarketcap.com/currencies/cardano/</a></span>), Minimize the use of hyperbole, superlatives, and redundant statements (e.g. leading, amazing, best, first of its kind, state of the art, decentralized blockchain). It should not read like a sales pitch. Focus on factual statements about your project. Write in third-person. Be concise - avoid redundant statements. (e.g. decentralized blockchain). For example, Launched in [dd/mm/yyyy] by a team based in [country], [project] is a smart contract platform that enables developers to build decentralized applications. See <span className='text-c_1564C0'><a href="https://coinmarketcap.com/currencies/cardano/">https://coinmarketcap.com/currencies/cardano/</a></span>.</span>},
        {requestOptionIdx: '0', label: 'Platform (e.g. EOS, NEO, Ethereum, proprietary blockchain).', field_name: 'platform', type: 'input', input_type: 'text', desc: 'Please specify all token platforms that the asset is currently on. For example, CHZ has ERC20 and BEP20 tokens and is therefore on the Ethereum and Binance blockchains.'},
        {requestOptionIdx: '0', label: 'Chain Fork(optional)', field_name: 'chain_fork', type: 'input', input_type: 'text', desc: 'Specify the chain/asset that the was project forked from (e.g. Bitcoin Cash was forked from Bitcoin and had the same blocks/history prior to the fork). Not to be confused with project forks. For example, Litecoin was forked from the Bitcoin source code, but it does not share the same block history. As such, Litecoin is NOT a chain fork of Bitcoin. Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '0', label: 'Hashing/Consensus Algorithm(optional)', field_name: 'hashing', type: 'select', options: selectOptions},
        {requestOptionIdx: '0, 1, 13', label: 'Team/Backers/Investors', field_name: 'team', type: 'textarea', desc: 'Provide a list of key employees, investors, and advisors. Describe their core competencies and past experience/achievements, and explain their involvement in your project. Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '0, 1, 13', label: 'Media Coverage/Awards(optional)', field_name: 'media_coverage', type: 'textarea', desc: 'Provide valid URL(s) to articles/references.'},
        {requestOptionIdx: '1, 13', label: 'Unique Features', field_name: 'unique_feature', type: 'textarea', desc: 'Explain how your project differentiates itself from alternatives and the status quo. Quantify and qualify your points with concrete and specific examples. Where possible, substantiate your points with evidence from credible, independently verifiable sources.'},
        {requestOptionIdx: '1, 13', label: 'API documentation', field_name: 'api_doc', type: 'input', type: 'text', desc: 'Provide a valid URL.'},
        {requestOptionIdx: '1', label: 'Blockchain network (For DEXes only)(optional)', field_name: 'blockchain_network', type: 'input', input_type: 'text', desc: "Please specify the blockchain network(s) that the DEX supports (e.g. Dodo supports BSC, Ethereum, Arbitrum, Polygon). If the DEX supports multiple chains, there would need to be a separate set of API endpoints for each chain."},
        {requestOptionIdx: '1', label: 'Five (5) API Endpoint URLs (Please see: https://tinyurl.com/y2hj58pd)', field_name: 'five_api', type: 'textarea', desc: "Provide valid URL(s). Please separate each endpoint URL with a comma. Congruence of your endpoints with our 5 ideal samples will expedite the integration process (IF we decide to move forward with integration)."},
        {requestOptionIdx: '1', label: 'Trading Pairs(optional)', field_name: 'trading_pair', type: 'textarea', desc: <span>Indicate the total number of trading pairs on your exchanges (e.g. 50 pairs in total as of [date]). Insert a sample list of URLs that link directly to the specific market(s)/pair(s). For example, <a href="https://www.binance.com/en/trade/pro/BTC_USDT" className='text-c_1564C0'>https://www.binance.com/en/trade/pro/BTC_USDT</a> INSTEAD of <a href="www.binance.com" className='text-c_1564C0'>www.binance.com</a></span>},
        {requestOptionIdx: '1', label: 'Trading Volume/liquidity', field_name: 'trading_volume', type: 'textarea', desc: 'If possible, explain whether you have any measures to prove that the volume is real.'},
        {requestOptionIdx: '13', label: 'Estimated assets under custody / on-chain', field_name: 'estimated_asset', type: 'input', input_type: 'text', desc: 'If not applicable, please indicate N/A or state the reason.'},
        {requestOptionIdx: '0, 1, 13', label: 'Traction/Adoption/Partnerships/MVPs/Apps', field_name: 'traction', type: 'textarea', desc: 'This can take the form of user growth, partnerships, enterprise/consumer adoption, and roadmap progress. Quantify and qualify your points with concrete and specific examples. Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '1, 13', label: 'Community Engagement', field_name: 'community_engagement', type: 'textarea', desc: 'Total size of community across ALL channels and initiatives to drive engagement.'},
        {requestOptionIdx: '1, 13', label: 'Regulation/Licence (If any)(optional)', field_name: 'regulation', type: 'textarea', desc: 'Regulation/Licence (if any - Please specify the authority that you are regulated by and provide proof for verification).'},
        {requestOptionIdx: '1, 13', label: 'Terms of Service URL(optional)', field_name: 'terms_service', type: 'input', input_type: 'text', desc: 'Insert a valid URL. The Terms of Service URL usually shows the legal domicile of the exchange.'},
        {requestOptionIdx: '1', label: 'Geographical focus', field_name: 'geograph', type: 'textarea', desc: "Please provide a geographical breakdown of your existing (or targeted) user base (e.g. Japan, Korea). Where possible, provide evidence/links for verification."},
        {requestOptionIdx: '1', label: 'Office Location(s)/Address(es)(optional)', field_name: 'office_loc', type: 'textarea', desc: 'Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '0, 1', label: 'Country of Origin (where majority of team is located)', field_name: 'country', type: 'textarea', desc: 'Please indicate the country where the majority of your team is located. If applicable, please provide a list of countries and indicate the location of your headquarters.'},
        {requestOptionIdx: '1', label: "Fiat Withdrawals (please specify the fiat pairs; Stablecoins [e.g. USDT] are NOT classified as fiat)", field_name: 'fiat_withdraw', type: 'textarea', desc: 'Where possible, provide evidence/links for verification.'},
        {requestOptionIdx: '1, 13', label: "Cybersecurity Measures", field_name: 'cyber_measure', type: 'textarea', desc: "Examples include penetration testing frequency and security audits. Where possible, provide evidence/links for verification. Enter 'NA' if this is not applicable."},
        {requestOptionIdx: '1', label: "Features (e.g. OTC/Derivatives)", field_name: 'features', type: 'select', options: selectOptions, desc: 'You may select more than 1 option.'},
        {requestOptionIdx: '1, 13', label: "KYC", field_name: 'kyc', type: 'select', options: selectOptions},
        {requestOptionIdx: '1', label: "Trading Incentives", field_name: 'trading_incentive', type: 'select', options: selectOptions, desc: 'You may select more than one option.'},
        {requestOptionIdx: '13', label: "Website URL", field_name: 'website_url', type: 'textarea', desc: 'Please share with us all relevant website URLs for the service.'},
        {requestOptionIdx: '1', label: "Website URL (Ability to view ALL market pairs and order books without the need to log-in)", field_name: 'website_url_market', type: 'input', input_type: 'text', desc: <span>Please note that this domain will be used for web traffic tracking purposes. There is data validation for this field. Kindly ensure that your URL conforms to the following format: <a href="https://www.website.com" className='text-c_1564C0'>https://www.website.com</a>. If you still have issues, feel free to insert a placeholder link. You can then add the real URL in the comment/proof section in the last field of this form.</span>},
        {requestOptionIdx: '0, 1, 13', label: 'Link to Logo', field_name: 'link_logo', type: 'input', input_type: 'text', desc: <span>3 conditions MUST be met: (1) Transparent background; (2) Square (200x200); unequal dimensions will be rejected! (3) PNG format. See <span className='text-c_1564C0'>https://onlinepngtools.com/create-transparent-png</span> and <span className='text-c_1564C0'>https://www.photoresizer.com/</span>. If possible, it is recommended that you provide logo URLs ending with .png so that our system can extract the logo directly.</span>},
        {requestOptionIdx: '1', label: "Trading Fee Structure", field_name: 'trading_fee', type: 'textarea', desc: <span>Provide a valid URL. Example: <a href="https://www.kucoin.com/news/en-fee" className='text-c_1564C0'>https://www.kucoin.com/news/en-fee</a></span>},
        {requestOptionIdx: '1, 13', label: "Deposit/Withdrawal Fee Structure", field_name: "deposit", type: 'textarea', desc: <span>Provide a valid URL. Example: <a href="https://www.kucoin.com/news/en-fee" className='text-c_1564C0'>https://www.kucoin.com/news/en-fee</a></span>},
        {requestOptionIdx: '1, 13', label: "System status URL that shows all coin listings/details (e.g. full name, logo, project URL)", field_name: 'system_status', type: 'input', input_type: 'text', desc: <span>Please see <a href="https://www.buyucoin.com/status." className="text-c_1564C0">https://www.buyucoin.com/status.</a></span>},
        {requestOptionIdx: '1', label: "Exchange Hot/Cold Wallet Addresses(optional)", field_name: 'exchange_hot', type: 'textarea', desc: "Proof of Solvency/Reserves/Liabilities. Where possible, provide evidence/links for verification. Enter 'NA' if this not applicable or if you are unable to provide the addresses."},
        {requestOptionIdx: '0, 14', label: 'Website 1', field_name: 'website', type: 'input', input_type: 'text', desc: 'There is data validation for this field. Kindly ensure that your URL conforms to the following format: https://www.website.com. If you still have issues, feel free to insert a placeholder link. You can then add the real URL in the comment/proof section in the last field of this form.'},
        {requestOptionIdx: '14', label: 'Headlines - Content Type', field_name: 'headline_content', type: 'select', options: selectOptions, desc: 'What type of content do you cover?'},
        {requestOptionIdx: '14', label: 'Headlines - Users Type', field_name: 'headline_user', type: 'select', options: selectOptions, desc: 'What type of users are you?'},
        {requestOptionIdx: '14', label: 'Headlines - Monthly User Metrics', field_name: 'headline_user_metric', type: 'input', input_type: 'number', desc: 'How many visitors/views/listens do you get a month'},
        {requestOptionIdx: '14', label: '[Headlines] Marketing Contact(optional)', field_name: 'headline_marketing', type: 'input', input_type: 'text', desc: 'Provide the email address to allow us to contact your marketing team.'},
        {requestOptionIdx: '14', label: '[Headlines] News RSS Feed(optional)', field_name: 'headline_rss', type: 'input', input_type: 'text', desc: '[If you are a news outlet] Please provide a link to your RSS feed. Leave this field blank if it is not applicable.'},
        {requestOptionIdx: '14', label: 'Headlines - Podcast RSS feed(optional)', field_name: 'headline_podcast', type: 'textarea', desc: '[If you offer a podcast] Please provide (i) a link to your RSS feed and (ii) indicate an estimation of your monthly active listeners. Leave this field blank if it is not applicable.'},
        {requestOptionIdx: '14', label: '[Headlines] Frequency of updates', field_name: 'headline_frequency', type: 'textarea', desc: "[For crypto projects] How often do you intend to post updates on CoinMarketCap Headlines? Type 'NA' if not applicable."},
        {requestOptionIdx: '14', label: '[Headlines] Exclusive content', field_name: 'headline_exclusive', type: 'textarea', desc: "[For cryptoasset projects] Do you plan to post exclusive content to CoinMarketCap Headlines? If so, how often do you intend to do so? Type 'NA' if not applicable."},
        {requestOptionIdx: '0', label: 'Website 2(Optional)', field_name: 'website_other', type: 'input', input_type: 'text', desc: 'There is data validation for this field. Kindly ensure that your URL conforms to the following format: https://www.website.com. If you still have issues, feel free to insert a placeholder link. You can then add the real URL in the comment/proof section in the last field of this form.'},
        {requestOptionIdx: '0', label: 'Annex A - Rich List & Reserve Addresses (Mandatory for Circulating Supply/Ranking)(optional)', field_name: 'annex_a', type: 'textarea', desc: <span>Paste the URL of your completed Annex A Google Sheet here. Please refer to the instructions in Cell A1 of this link and ensure that your submission is in the CORRECT format: <span className='text-c_1564C0'>https://docs.google.com/spreadsheets/d/1ON2o9fZtdj6aa_uaT7ALtGx1VxFnIDUi8-uS-fWji0o/edit#gid=1181839735</span>.</span>},
        {requestOptionIdx: '4', label: "Annex B - Swap Form", field_name: "annex_b", type: "textarea", desc: <span>Paste the URL of your completed Annex B Google Sheet here. Please refer to the instructions in Cell A1 of this link: <a href="https://docs.google.com/spreadsheets/d/1ON2o9fZtdj6aa_uaT7ALtGx1VxFnIDUi8-uS-fWji0o/edit#gid=730221728" className='text-c_1564C0'>https://docs.google.com/spreadsheets/d/1ON2o9fZtdj6aa_uaT7ALtGx1VxFnIDUi8-uS-fWji0o/edit#gid=730221728</a>.</span>},
        {requestOptionIdx: '3', label: "Annex C - Supply Update", field_name: 'annex_c', type: 'textarea', desc: <span>Paste the URL of your completed Annex C Google Sheet here. Please review the instructions in Cell A1 here - <a href="https://docs.google.com/spreadsheets/d/1ON2o9fZtdj6aa_uaT7ALtGx1VxFnIDUi8-uS-fWji0o/edit#gid=1300521795" className='text-c_1564C0'></a> and paste the URL of your Google Sheet here.</span>},
        {requestOptionIdx: '0', label: 'Emission/release schedule(optional)', field_name: 'emission', type: 'input', input_type: 'text', desc: <span>Shows the emission/release schedule of the asset over time. See examples - <span className='text-c_1564C0'><a href="https://skale.network/tokenomics">https://skale.network/tokenomics</a>, <a href="https://geeq.io/tokenomics/">https://geeq.io/tokenomics/</a>, <a href="https://www.orchid.com/oxt">https://www.orchid.com/oxt</a></span></span>},
        {requestOptionIdx: '0', label: 'Platform of Contract Address 1', field_name: 'platform_contact', type: 'select', options: selectOptions, desc: <span>Shows the emission/release schedule of the asset over time. See examples - <span><a href="https://skale.network/tokenomics">https://skale.network/tokenomics</a>, <a href="https://geeq.io/tokenomics/">https://geeq.io/tokenomics/</a>, <a href="https://www.orchid.com/oxt">https://www.orchid.com/oxt</a></span></span>},
        {requestOptionIdx: '0', label: 'Contract Address 1', field_name: 'contract', type: 'input', input_type: 'text', desc: "Please specify the chain that you are on (e.g. Binance Smart Chain, Ethereum, Heco). Use this format: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 (Ethereum). Type 'NA' if there is no contract yet (for untracked listings)."},
        {requestOptionIdx: '0', label: 'Number of Decimals (Contract Address 1)(optional)', field_name: 'number_decimal', type: 'input', input_type: 'text', desc: <span>This is usually found on the explorer page of the asset. See example - <span className='text-c_1564C0'><a href="https://gyazo.com/7e2b24ca517cd90fd3a36f83d7c0a88f">https://gyazo.com/7e2b24ca517cd90fd3a36f83d7c0a88f</a></span></span>},
        {requestOptionIdx: '0', label: 'Block Explorer 1(optional)', field_name: 'block_explorer', type: 'input', input_type: 'text', desc: <span>Insert a valid URL with the CONTRACT ADDRESS, e.g. <span className='text-c_1564C0'><a href="https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599">https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599</a></span>. This is a mandatory field for projects that are already trading on an exchange.</span>},
        {requestOptionIdx: '0', label: 'Block Explorer(s) 2, 3, 4, 5 (e.g. Etherscan, Ethplorer)(optional)', field_name: 'block_explorer', type: 'textarea', desc: <span>Insert a valid URL with the CONTRACT ADDRESS, e.g. <span className='text-c_1564C0'><a href="https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599">https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599</a></span>. If there is more than 1 explorer URL, please separate each entry with a comma. For example, <span className='text-c_1564C0'><a href="https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599">https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599</a></span>, <span className='text-c_1564C0'><a href="https://ethplorer.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599">https://ethplorer.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599</a></span>, <span className='text-c_1564C0'><a href="https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56">https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56</a></span>, <span><a href="https://polygonscan.com/token/0xa1428174f516f527fafdd146b883bb4428682737">https://polygonscan.com/token/0xa1428174f516f527fafdd146b883bb4428682737</a></span></span>},
        {requestOptionIdx: '0', label: 'Source Code (e.g. Github, Gitter)(optional)', field_name: 'source_code', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0', label: 'Whitepaper / Technical Documentation(optional)', field_name: 'whitepaper', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0', label: 'Announcement (e.g. Bitcointalk)(optional)', field_name: 'announcement', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0, 1, 13', label: 'Message Board 1 (e.g. Blog/Medium)(optional)', field_name: 'msg_board', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0, 1, 13', label: 'Message Board(s) 2, 3, 4, 5 (e.g. Blog/Medium)(optional)', field_name: 'msg_board_other', type: 'textarea', desc: 'Insert valid URL(s). If there is more than 1 URL, please separate each entry with a comma.'},
        {requestOptionIdx: '0, 1, 13', label: 'Twitter', field_name: 'twitter', type: 'input', input_type: 'text', desc: <span>There is data validation for this field. Kindly ensure that your URL conforms to the following format. <a href="https://twitter.com/bitcoin" className='text-c_1564C0'>https://twitter.com/bitcoin</a></span>},
        {requestOptionIdx: '0', label: 'Reddit (optional)', field_name: 'reddit', type: 'input', input_type: 'text', desc: 'Insert a valid URL for a subreddit.'},
        {requestOptionIdx: '0', label: 'Facebook(optional)', field_name: 'facebook', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0', label: 'Project introduction video(optional)', field_name: 'intro_video', type: 'input', input_type: 'text', desc: 'Share a link to an introduction video of the project (e.g. YouTube/Vimeo)'},
        {requestOptionIdx: '0', label: 'Video Channel (e.g. YouTube)(optional)', field_name: 'video_channel', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0, 1, 13', label: 'Chat 1 (e.g. Discord, Telegram, Slack, Weibo).', field_name: 'chat', type: 'input', input_type: 'text', desc: <span>There is data validation for this field. Ex: <a className='text-c_1564C0' href="https://t.me/coinmarketcap">https://t.me/coinmarketcap</a></span>},
        {requestOptionIdx: '0, 1, 13', label: 'Chat(s) 2, 3, 4, 5 (e.g. Discord, Telegram, Slack, Weibo).(optional)', field_name: 'chat_other', type: 'textarea', desc: 'Insert valid URL(s). If there is more than 1 URL, please separate each entry with a comma.'},
        {requestOptionIdx: '0, 1, 13', label: 'LinkedIn(optional)', field_name: 'linkedin', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0, 1, 13', label: 'Mobile App 1 (e.g. Google Play store, iTunes store)(optional)', field_name: 'mobile_app', type: 'input', input_type: 'text', desc: 'Insert a valid URL.'},
        {requestOptionIdx: '0, 1, 13', label: 'Mobile App(s) 2, 3, 4, 5 (e.g. Google Play store, iTunes store)(optional)', field_name: 'mobile_app_other', type: 'textarea', desc: 'Insert valid URL(s). If there is more than 1 URL, please separate each entry with a comma.'},
        {requestOptionIdx: '0', label: "Circulating Supply (# of coins that are circulating in the market and in the public's hands.)", field_name: 'circulating_supply', type: 'input', input_type: 'text', desc: 'Insert EXACT number of units (e.g. 21000000).'},
        {requestOptionIdx: '0', label: 'Total Supply (# of coins in existence right now minus any coins that have been burned.)', field_name: 'total_supply', type: 'input', input_type: 'number', desc: 'Insert EXACT number of units (e.g. 21000000).'},
        {requestOptionIdx: '0', label: 'Max Supply (maximum # of coins that will ever exist in the lifetime of the asset)', field_name: 'max_supply', type: 'input', input_type: 'number', desc: "Insert EXACT number of units (e.g. 21000000). If the max supply is infinite, type '0'"},
        {requestOptionIdx: '0', label: 'ICO/IEO Start Date(optional)', field_name: 'ico_start', type: 'input', input_type: 'text'},
        {requestOptionIdx: '0', label: 'ICO/IEO End Date(optional)', field_name: 'ico_end', type: 'input', input_type: 'text'},
        {requestOptionIdx: '0', label: 'ICO/IEO/Launch Price(optional)', field_name: 'ico_price', type: 'input', input_type: 'number', desc: 'Insert USD Price'},
        {requestOptionIdx: '0', label: 'API endpoint that displays ONLY TOTAL SUPPLY as a NUMERICAL value (optional)', field_name: 'api_total_supply', type: 'input', input_type: 'text', desc: <span>MUST be in this EXACT format - <a className=' text-c_1564C0' href="http://chainz.cryptoid.info/grs/api.dws?q=totalcoins">http://chainz.cryptoid.info/grs/api.dws?q=totalcoins</a>. Total Supply refers to the # of coins in existence right now (minus any coins that have been verifiably burned.</span>},
        {requestOptionIdx: '0', label: 'API endpoint that displays ONLY Circulating Supply as a numerical value(optional)', field_name: 'api_circulating_supply', type: 'input', input_type: 'text', desc: <span>MUST be in this EXACT format - <a className=' text-c_1564C0' href="http://chainz.cryptoid.info/grs/api.dws?q=circulating">http://chainz.cryptoid.info/grs/api.dws?q=circulating</a>. Circulating Supply refers to the # of coins that are circulating in the market and in the general public's hands</span>},
        {requestOptionIdx: '0', label: 'List of CMC-supported exchanges(optional)', field_name: 'list_cmc', type: 'textarea', desc: <span>Enter NA if not applicable. Provide (i) screenshots (e.g. imgur/gyazo) and (ii) URLs that link directly to the market(s)/pair(s). Separate each URL with a comma. See example - <a href="https://www.binance.com/en/trade/BTC_USDT" className=' text-c_1564C0'>https://www.binance.com/en/trade/BTC_USDT</a></span>},
        {requestOptionIdx: '0, 1, 13', label: '[Optional] Are you willing to provide (dofollow) linkbacks to CMC?', field_name: 'linkback_enable', type: 'select', options: selectOptions, desc: <span>8 out of 10 applicants are willing to do so. Please see: <a className='text-c_1564C0' href="https://gyazo.com/d76a8f1d7293bf9155b57d617c9b6efc">https://gyazo.com/d76a8f1d7293bf9155b57d617c9b6efc</a>. To understand what 'dofollow' means, please see: <a href="https://blog.alexa.com/dofollow-vs-nofollow-links/" className='text-c_1564C0'>https://blog.alexa.com/dofollow-vs-nofollow-links/</a></span>},
        {requestOptionIdx: '0', label: 'ICO Page Application(optional)', field_name: 'ico_page', type: 'checkbox', desc: <span>If you are keen to be featured on our ICO page, kindly bookmark this page and apply here AFTER you have been listed on CMC - <a href="https://docs.google.com/forms/d/e/1FAIpQLSdplHeL6_N63URP0uiAJeA-z8GKfZHzbCOsoGmk6SxqhS1aiQ/viewform" className='text-c_1564C0'>https://docs.google.com/forms/d/e/1FAIpQLSdplHeL6_N63URP0uiAJeA-z8GKfZHzbCOsoGmk6SxqhS1aiQ/viewform</a></span>},
        {requestOptionIdx: '0', label: 'SRD Application', field_name: 'srd', type: 'checkbox', desc: <span>Are you an official representative of the project? If so, please sign up for our self-reporting dashboard to manage certain fields on your coin detail pages AFTER this application is complete. Kindly follow the steps outlined here to complete the onboarding process. <a className='text-c_1564C0' href="https://docs.google.com/presentation/d/1p0-EjHE4ELpLZ8kwzP855L5x3uq941oUpCfIYSraa0g/edit#slide=id.g8830a96fa9_0_1349">https://docs.google.com/presentation/d/1p0-EjHE4ELpLZ8kwzP855L5x3uq941oUpCfIYSraa0g/edit#slide=id.g8830a96fa9_0_1349</a></span>},
        {requestOptionIdx: '0', label: 'Public verification post', field_name: 'verification_post', type: 'checkbox', desc: "Please follow up your initial application with a public verification post. In order for us to display your contract address and explorer data, please make a public post using one of the accounts (e.g. social media) associated with the URLs found on the project's official website. In the post, mention the ticket number that you received from your CMC application. Provide the URL to the public post so that the CMC team can verify the information. This would give the team a greater degree of assurance in ascertaining the legitimacy of the request. This would prevent scammers from planting fake contract addresses. In addition, feel free to provide telegram @username of someone who can vouch for the legitimacy of this application."},
        {requestOptionIdx: '9', label: 'What is the name of your event?', field_name: 'event_name', type: 'input', input_type: 'text'},
        {requestOptionIdx: '16', label: '[Earn] Campaign Name', field_name: 'earn_campaign_name', type: 'input', input_type: 'text', desc: <span>Please check the campaign status here - <a href="https://coinmarketcap.com/earn/token-distribution-status" className='text-c_1564C0'>https://coinmarketcap.com/earn/token-distribution-status</a></span>},
        {requestOptionIdx: '16', label: '[Earn] Campaign Status', field_name: 'earn_compaign_status', type: 'input', input_type: 'text', desc: 'Please indicate the name of the campaign, e.g. 1inch, HNT'},
        {requestOptionIdx: '16', label: '[Earn] Binance ID', field_name: 'earn_binance_id', type: 'input', input_type: 'text', desc: 'Please provide your Binance ID'},
        {requestOptionIdx: '16', label: '[Earn] Date of Participation', field_name: 'earn_date_participation', type: 'select', desc: 'Please indicate the date of submission of your entry. Use DD/MMM/YYYY format, e.g. 01 Mar 2021'},
        {requestOptionIdx: '16', label: '[Earn] Country of Origin', field_name: 'earn_country', type: 'input', input_type: 'text', desc: <span>Please indicate the country that you are a citizen of. Please refer to this FAQ to view the eligible countries - <a href="https://coinmarketcap.com/earn/faq" className='text-c_1564C0'>https://coinmarketcap.com/earn/faq</a></span>},
        {requestOptionIdx: '17', label: 'CMC Airdrop Campaign', field_name: 'cmc_airdrop_compaign', type: 'checkbox', desc: <span>To be considered for an airdrop listing, please review the instructions in this URL - (<a href='https://tinyurl.com/2888rys6' className='text-c_1564C0'>https://tinyurl.com/2888rys6</a>). DO NOT submit anything to this form because you will be redirected to the aforementioned URL.</span>},
        {requestOptionIdx: '18', label: 'Your Mobile Platform(optional)', field_name: 'mobile_platform', type: 'select', options: selectOptions, desc: 'Please select if your device is Android or iOS'},
        {requestOptionIdx: '18', label: 'Device name, OS Version, CMC App version?(optional)', field_name: 'device_os_cmc_version', type: 'input', input_type: 'text', desc: 'Please give us as much information as possible, to assist with troubleshooting your issue'},
        {requestOptionIdx: '18', label: 'I cannot use the app because of this issue(optional)', field_name: 'app_issue', type: 'checkbox'},
        {requestOptionIdx: '18', label: 'Reason for Contacting Support', field_name: 'reason_contact', type: 'select', options: selectOptions, desc: 'What is your reason for contacting the CMC support team?'},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18', label: 'Proof/Supporting evidence/documents', field_name: 'proof', type: 'textarea', desc: "Provide proof (e.g. imgur, gyazo) that the request is authentic (e.g. info is reflected on website, announcement thread, twitter page, etc.). Please ensure that the requested updates match what is found on the project’s website/social media accounts. If the request entails changing the project’s website, please explain why the team is unable to get the original URL to redirect to the new website. Type 'NA' if not applicable."},
        {requestOptionIdx: '9', label: 'Start Date of Event', field_name: 'event_start', type: 'input', input_type: 'text'},
        {requestOptionIdx: '9', label: 'End Date of Event', field_name: 'event_end', type: 'input', input_type: 'text', desc: 'If it is a one-day event, please put the same date as the start date.'},
        {requestOptionIdx: '9', label: 'Event Time', field_name: 'event_time', type: 'input', input_type: 'text', desc: `Enter "All day" if it's a multi-day conference.`},
        {requestOptionIdx: '9', label: 'State and/or Country of Event', field_name: 'event_state', type: 'input', input_type: 'text'},
        {requestOptionIdx: '9', label: 'Venue Name', field_name: 'venue_name', type: 'input', input_type: 'text', desc: 'Name of hotel or general venue (e.g. Times Square).'},
        {requestOptionIdx: '9', label: 'Venue Address', field_name: 'venue_address', type: 'input', input_type: 'text', desc: 'Specific street address of event.'},
        {requestOptionIdx: '9', label: 'Event Website', field_name: 'event_website', type: 'input', input_type: 'text', desc: 'Site or meetup page with more info about the event.'},
        {requestOptionIdx: '9', label: 'Link to Your Event Image', field_name: 'event_img', type: 'input', input_type: 'text', desc: 'Dimensions should be: 1200x628.'},
        {requestOptionIdx: '9, 14', label: 'What is your email?', field_name: 'what_email', type: 'input', input_type: 'text', desc: 'In case we need to get in touch with you to clarify event details.'},
        {requestOptionIdx: '9', label: 'What is your name?', field_name: 'what_name', type: 'input', input_type: 'text', desc: 'We want to know what to call you by.'},
        {requestOptionIdx: '10', label: 'Platform Version', field_name: 'platform_version', type: 'select', options: selectOptions, desc: 'On which platform is the issue occurring?'},
        {requestOptionIdx: '10', label: 'Device(optional)', field_name: 'device', type: 'textarea', desc: 'Indicate the Device that you encountered the bug on (e.g. Galaxy Tab S7 SM-T875NZNEXSP)'},
        {requestOptionIdx: '10', label: 'Operating System(optional)', field_name: 'operating_system', type: 'textarea', desc: 'Indicate the Operating system of the device that you are using (e.g. Android 4.0.4, iOS 14.3 )'},
        {requestOptionIdx: '10', label: '[Bug] Timestamp(optional)', field_name: 'bug_timestamp', type: 'textarea', desc: 'Provide a timestamp of when the bug was encountered, e.g. 1 Jan 2021, 1000 hrs, GMT+8'},
        {requestOptionIdx: '10', label: '[Bug] URL(optional)', field_name: 'bug_url', type: 'textarea', desc: 'Provide the URL that you encountered the bug on and explain how exactly you encountered the bug so that the team can reproduce the error on our end.'},
        {requestOptionIdx: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18', label: 'Attachment', sub_label: 'Maximum file size: 5M', field_name: 'attachment', type: 'file'},
    ]

    const [activeIdx, setActiveIdx] = useState(0)
    const [currentReqForm, setCurrentReqForm] = useState(null)
    const [request1, setRequest1] = useState({
        new_crypto: '',
        email: '',
        subject: '',
        review: false,
        terms: false,
        deciaration: false,
        disclaimer: false,
        relationship: '',
        launch_date: '',
        name: '',
        ticker: '',
        tag: '',
        liner_desc: '',
        project_desc: '',
        platform: '',
        chain_fork: '',
        hashing: '',
        team: '',
        media_coverage: '',
        traction: '',
        country: '',
        link_logo: '',
        website: '',
        website_other: '',
        annex: '',
        emission: '',
        platform_contact: '',
        contact: '',
        number_decimal: 0,
        block_explorer: '',
        block_explorer_other: '',
        source_code: '',
        white_paper: '',
        anouncement: '',
        msg_board: '',
        msg_board_other: '',
        twitter: '',
        reddit: '',
        facebook: '',
        intro_video: '',
        video_channel: '',
        chat: '',
        chat_other: '',
        linkedin: '',
        mobile_app: '',
        mobile_app_other: '',
        circulating_supply: '',
        total_supply: '',
        max_supply: '',
        ico_start: '',
        ico_end: '',
        ico_price: '',
        api_total_supply: '',
        api_circulating_supply: '',
        list_cmc: '',
        linkback_enable: null,
        ico_page: false,
        srd: false,
        verification_post: false,
        proof: '',
        attachment: ''
    })

    const updateCurrentReqFormHandler = () => {
        
        var result = requestForm.filter(item => {
            if (String(item.requestOptionIdx).replaceAll(' ', '').split(',').includes(String(activeIdx))) {
                return item
            }
        })
        setCurrentReqForm(result)
    }
    const updateActiveIdxHandler = (e) => {
        var result = requestOption.findIndex(item => item.title === e)
        setActiveIdx(result)
    }

    useEffect(() => {
        updateCurrentReqFormHandler()
    }, [activeIdx])
    return (
        <>
            <div className='pl-13 pr-9 mt-15'>
                <span className='text-28px font-bold'>Submit a request</span>
                <p className='mt-2 max-w-5xl'>For advertising queries, please complete this form - Please review ALL the options and select the CORRECT form to ensure that your request gets routed to the correct team. Priority will be given to requesters that submit well-structured, actionable, and complete information to the CORRECT form.</p>
                <div className='mt-8'>
                    <SelectInput className="max-w-2xl h-9_5 px-3 w-full border border-transparent dark:border-c_4D4D4D rounded-lg bg-white dark:bg-transparent shadow-card dark:shadow-none"
                        option_board_class="bg-white dark:bg-c_2E2E2E top-11 z-10"
                        option_li={requestOption} 
                        default_option={requestOption[0]}
                        returnVal={updateActiveIdxHandler}
                    />
                </div>
                <div className='mt-8 flex flex-col gap-y-7'>
                    {currentReqForm && currentReqForm.map((item, idx) => {
                        return (
                            <div key={`item_${idx}`} className={`flex flex-col w-full max-w-2xl`}>
                                {item.label &&
                                    <span className='font-semibold'>{item.label}</span>
                                }
                                {item.sub_label &&
                                    <span className='mt-1.5 text-xs text-c_6E7582 dark:text-c_8A8A8A'>{item.sub_label}</span>
                                }
                                {item.type === 'input' &&
                                    <input type={item.input_type} name={item.field_name} className="h-9_5 w-full mt-2.5 pl-3 border rounded-lg bg-white dark:bg-transparent border-transparent dark:border-c_4D4D4D shadow-card dark:shadow-none" />
                                }
                                {item.type === 'select' && Array.isArray(item.options) &&
                                    <SelectInput className="mt-2.5 h-9_5 px-3 w-full border border-transparent dark:border-c_4D4D4D rounded-lg bg-white dark:bg-transparent shadow-card dark:shadow-none"
                                        option_board_class="bg-white dark:bg-c_2E2E2E top-11 z-10"
                                        option_li={item.options} 
                                        default_option={item.options[0]}
                                        returnVal={() => {}}
                                    />
                                }
                                {item.type === 'checkbox' &&
                                    // <div className='w-5 h-5 mt-3 flex justify-center items-center cursor-pointer rounded border dark:border-c_4D4D4D'>
                                    //     <BsCheck2 />
                                    //     <input type='checkbox' className='mt-3 mb-2.5 dark:bg-transparent hidden' name={item.field_name}/>
                                    // </div>
                                    <CustomCheckbox defaultVal={false} name={item.field_name} />

                                }
                                {item.type === 'textarea' &&
                                    <textarea name={item.field_name} id="" rows="10" className='mt-2.5 p-3 rounded-lg border border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none'></textarea>
                                }
                                {item.type === 'file' &&
                                    <div className='mt-6 flex flex-wrap gap-4'>
                                        <div className='w-30 h-30 bg-c_E8EBF1 dark:bg-c_2E2E2E flex flex-col rounded-lg'>
                                            <BsPlusLg className='m-auto text-xl stroke-1 text-c_D0D7E9 dark:text-c_4D4D4D' />
                                        </div>
                                        <div className='relative w-30 h-30 rounded-lg flex flex-col bg-white dark:bg-c_2E2E2E shadow-card dark:shadow-none'>
                                            <span className='m-auto text-xs text-c_6E7582 dark:text-c_F0F0F0'>ABC.pdf</span>
                                            <button className='absolute top-2 right-2 text-c_D0D7E9 dark:text-c_4D4D4D'>
                                                <BsXLg />
                                            </button>
                                        </div>
                                    </div>
                                }
                                {item.desc &&
                                    <span className={`mt-2.5 text-xs ${item.type === 'checkbox' ? 'text-black dark:text-c_8A8A8A' : 'text-c_6E7582 dark:text-c_8A8A8A'}`}>{item.desc}</span>
                                }
                            </div>
                        )
                    })}
                    <div>
                        <button className='mt-7 h-7_5 px-8 flex items-center bg-c_1564C0 rounded-full text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitReq