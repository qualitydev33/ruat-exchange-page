import {
    BsBoxArrowUpRight,
} from '../components/icon/IconImage'

const PolicyPage = () => {
    const inforContent = [
        'To fulfill a contract or take steps linked to a contract such as processing your registration on our Website or sending you information about changes to our terms or policies',
        'Where it is necessary for purposes which are in CoinMarketCap’s or third parties’ legitimate interests such as (a) to provide the information or content you have requested; (b) to contact you about our programs, products, features or services; (c) for internal business purposes such as identification and authentication or customer service, portfolio tracking and user preference syncing between devices; (d) to ensure the security of our Website, by trying to prevent unauthorized or malicious activities; (e) to enforce compliance with our Terms of Use and other policies; (f) to help other organizations (such as copyright owners) to enforce their rights; and (g) to tailor content, advertisements, and offers for you or for other purposes disclosed at the time of collection. If you do not wish to receive marketing information about our programs, products, features or services, you may send an email to us at legal@coinmarketcap.com.',
        'Where you give us consent, such as (a) where you ask us to send marketing information to you via a medium where we need your consent, including alerts via mobile push notifications; (b) where you give us consent to place cookies and to use similar technologies; and (c) on other occasions where we ask you for consent, for a purpose which we explain at that time.',
        'Where we are legally required to do so. We may also provide access to your personally identifiable information when legally required to do so, to cooperate with police investigations or other legal proceedings, to protect against misuse or unauthorized use of our Website, to limit our legal liability and protect our rights, or to protect the rights, property or safety of visitors of the Website or the public. In those instances, the information is provided only for that purpose.'
    ]
    const shareContent = [
        'It is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Terms of Service, or as otherwise required by law.',
        'We transfer information about you if CoinMarketCap is acquired by or merged with another company. In this event, CoinMarketCap will notify you before information about you is transferred and becomes subject to a different privacy policy.',
        'We provide such information to trusted businesses or persons for the sole purpose of processing personally identifying information on our behalf. When this is done, it is subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures.',
        'We provide such information to third parties who have entered into non-disclosure agreements with us.',
        'We provide such information to a company controlled by, or under common control with, CoinMarketCap for any purpose permitted by this Privacy Policy.',
        'We may aggregate, anonymize, and publish data for statistical and research purposes only. For example, we may compile and share information related to the popularity of certain products tracked by users. In any such instance, the information will not be able to be traced back to any individual.'
    ]
    const californiaPrivacy = [
        'Deny access to our Services',
        'Charge a different rate for the use of our Services',
        'Provide a different quality of service'
    ]
    const btnLi = [
        {title: 'Request', link: ''},
        {title: 'Feedback', link: ''},
        {title: 'Contact US', link: ''},
        {title: 'Donate', link: ''},
    ]
    return <>
        <div className="flex flex-col pl-13 pr-16 py-11 text-sm font-medium text-black dark:text-c_F0F0F0">
            <span className="text-28px font-bold">Privacy and Cookie Policy</span>
            <div className="mt-8">At CoinMarketCap, we’re committed to protecting and respecting your privacy. This Privacy and Cookie Policy (“Privacy Policy”) govern your access to and use of this Website, coinmarketcap.com (the “Website”), and associated content, software, and mobile applications (collectively, the “Service”). This Privacy Policy also includes our Terms of Use which is located at https://coinmarketcap.com/terms.<br /><br /> This Privacy Policy explains when and why we collect personal information about people who visit our Website or use our Services and how we use the personal information, the conditions under which we may disclose your personal information to others, and how we keep personal information secure. This Privacy Policy also explains how we use cookies and similar technology on our Website and in connection with our Services.<br /><br /> We may change this Privacy Policy from time to time so please check this page occasionally to ensure that you are happy with any changes. By using our Website or our Services, you are agreeing to be bound by this Privacy Policy.</div>

            <div className="mt-9">
                <span className="text-xl font-bold">What Information Do We Collect?</span>
                <p className="mt-2">CoinMarketCap (“CoinMarketCap”, “we” or “us”) collects (a) the e-mail addresses of those who communicate with us via e-mail; (b) aggregate information concerning what pages users access or visit; (c) information volunteered by the user (such as survey information and/or site registrations); (d) financial information provided by the user for user syncing and information purposes only; and (e) information related to your use of the Website and/or the mobile application, including IP address, geographic location, and date and time of your request.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">How Do We Use the Information?</span>
                <p className="mt-2">CoinMarketCap uses collected information for the following purposes:</p>
                <div className="pl-4">
                    {inforContent.map((item, idx) => {
                        return <div key={`infopart_${idx}`} className="flex gap-x-3 mt-2">
                            <div className=" text-c_1564C0 font-bold">•</div>
                            <div className=" flex-1">{item}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">How Do We Share Your Information?</span>
                <p className="mt-2">We do not share or sell your personal data to other organizations for commercial purposes, except to provide products or services you’ve requested, when we have your permission, or under the following circumstances:</p>
                <div className="pl-4">
                    {shareContent.map((item, idx) => {
                        return <div key={`sharepart_${idx}`} className="flex gap-x-3 mt-2">
                            <div className=" text-c_1564C0 font-bold">•</div>
                            <div className=" flex-1">{item}</div>
                        </div>
                    })}
                </div>
            </div>
            
            <div className="mt-9">
                <span className="text-xl font-bold">Cookies and Web Beacons</span>
                <p className="mt-2">A cookie is a small amount of data, which often includes an anonymous unique identifier, which is sent to your browser from a Website’s computers and stored on your computer’s hard drive. Cookies are required to use some CoinMarketCap services. CoinMarketCap and its ad management partners (“Ad Partners”) use cookies to record current session information.<br /><br /> Our Ad Partners may also from time to time use web beacons (also known as Internet tags, pixel tags, and clear GIFs). These web beacons are provided by our Ad Partners and allow Ad Partners to obtain information such as the IP address of the computer that downloaded the page on which the beacon appears, the URL of the page on which the beacon appears, the time the page containing the beacon was viewed, the type of browser used to view the page, and the information in cookies set by the Ad Partners. Web beacons enable our Ad Partners to recognize a unique cookie on your web browser, which in turn enables us to learn which advertisements bring users to our Website.<br /><br /> With both cookies and web beacon technology, the information that we collect and share is anonymous and not personally identifiable. It does not contain your name, address, geographic location, telephone number, or e-mail address.<br /><br /> You can opt-out of Google Analytics data collection with the Google Analytics Opt-out Browser Add-on.<br /><br /> You may also wish to refer to this website for additional information about disabling cookies from your browser: http://www.allaboutcookies.org/ manage-cookies/.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Data Storage</span>
                <p className="mt-2">CoinMarketCap uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run CoinMarketCap and the related Website and mobile application. CoinMarketCap owns the code, databases, and all rights to the CoinMarketCap Website and mobile application and Services.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Security</span>
                <p className="mt-2">We take precautions to ensure the security of your personal information. However, we cannot guarantee that hackers or unauthorized personnel may gain access to your personal information despite our efforts. You should note that in using the CoinMarketCap service, your information will travel over the Internet and through third-party infrastructures and mobile networks, which are not under our control.<br /><br /> We cannot protect, nor does this Privacy Policy apply to, any information that you transmit to other users. You should never transmit personal or identifying information to other users.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Retention of Your Personal Information</span>
                <p className="mt-2">We retain information as long as it is necessary to provide the Services requested by you and others, subject to any legal obligations to further retain such information. Information associated with your account will generally be kept until it is no longer necessary to provide the Services or until you ask us to delete it or your account is deleted, whichever comes first. Additionally, we may retain information from deleted accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with investigations, enforce the Terms of Use, and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.<br /><br /> Information about you that is no longer necessary and relevant to provide our Services may be de-identified and aggregated with other non-personal data to provide insights which are commercially valuable to CoinMarketCap, such as statistics related to the use of CoinMarketCap’s Website and application.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Children</span>
                <p className="mt-2">The CoinMarketCap service is not intended for children under the age of 16, and we do not knowingly collect information from children under the age of 16.<br /><br /> Children aged 16 or younger should not submit any personal information without the permission of their parents or guardians. By using the CoinMarketCap service, you are representing that you are at least 18 years old, or that you are at least 16 years old and have your parents’ or guardians’ permission to use the Service.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Consent to Worldwide Transfer and Processing of Personal Information</span>
                <p className="mt-2">CoinMarketCap is located in the United States. and the terms of this Privacy Policy and the related Terms of Use shall be governed by and construed in accordance with U.S. federal law and the laws of Delaware, without regard to any principles of conflicts of law. If you are not located in the United States, by accessing the Website and Services and providing personal information through it, you agree and acknowledge and consent to the collection, maintenance, processing, and transfer of such information in and to the United States and other countries and territories. These other jurisdictions may have different privacy laws from your home jurisdiction and provide different levels of protection of personal information. CoinMarketCap does have processes and procedures in place to provide adequate levels of protection to protect the transfer of data from the European Union. You agree that the terms of this Privacy Policy and the Terms of Use will apply and you consent to the transmission and processing of your personal information in any jurisdiction.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">EU and EEA Users’ Rights</span>
                <p className="mt-2">If you are habitually located in the European Union or European Economic Area, you generally have the right to access, rectify, download or erase your information, as well as the right to restrict and object to certain processing of your information. While some of these rights apply generally, certain rights apply only in certain limited circumstances. We briefly describe these rights below:<br /><br /> You have the right to access your personal data and, if necessary, have it amended, deleted or restricted. In certain instances, you may have the right to the portability of your data. You can also ask us to not send marketing communications and not to use your personal data when we carry out profiling for direct marketing purposes. You can opt out of receiving e-mail newsletters and other marketing communications by following the opt-out instructions provided to you in those e-mails. Transactional account messages will be unaffected even if you opt out from marketing communications.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Complaints</span>
                <p className="mt-2">If you are habitually located in the European Union or European Economic Area, you generally have the right to access, rectify, download or erase your information, as well as the right to restrict and object to certain processing of your information. While some of these rights apply generally, certain rights apply only in certain limited circumstances. We briefly describe these rights below: You have the right to access your personal data and, if necessary, have it amended, deleted or restricted. In certain instances, you may have the right to the portability of your data. You can also ask us to not send marketing communications and not to use your personal data when we carry out profiling for direct marketing purposes. You can opt out of receiving e-mail newsletters and other marketing communications by following the opt-out instructions provided to you in those e-mails. Transactional account messages will be unaffected even if you opt out from marketing communications.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Your California Privacy Rights</span>
                <p className="mt-2">California Consumer Privacy Act (CCPA)<br /><br /> In the last twelve months, CoinMarketCap may have collected, used, and shared, for business purposes, personal information about you as described in this Privacy Policy. Each category of data may be used by CoinMarketCap or shared with third parties also as described in this Privacy Policy. Residents of California have the right to request access to and deletion of the information CoinMarketCap holds about them. Such requests may be submitted by email to legal@coinmarketcap.com or by mail to CoinMarketCap OpCo LLC. CoinMarketCap will not sell your personal information without your consent. CoinMarketCap will not discriminate against you for exercising your rights under CCPA. Specifically, we will not:</p>
                <div className="pl-4">
                    {californiaPrivacy.map((item, idx) => {
                        return <div key={`california_${idx}`} className="flex gap-x-3 mt-2">
                            <div className=" text-c_1564C0 font-bold">•</div>
                            <div className=" flex-1">{item}</div>
                        </div>
                    })}
                </div>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Changes</span>
                <p className="mt-2">CoinMarketCap may periodically update this policy. We may notify you about significant changes in the way we treat personal information by placing a prominent notice on our Website so please check back occasionally to ensure that you agree with the changes. If you do not, do not use the Website, the application or our Services.</p>
            </div>

            <div className="mt-9">
                <span className="text-xl font-bold">Questions</span>
                <p className="mt-2">Any questions about this Privacy Policy should be addressed to this e-mail address: legal@coinmarketcap.com.<br /><br />Effective Date: January 1st, 2020.</p>
            </div>

            <div className="mt-14 flex items-center justify-center gap-x-4">
                {btnLi.map((item, idx) => {
                    return <button key={`btn_${idx}`} className="h-9_5 px-3.5 flex items-center rounded-lg border-2 border-transparent dark:border-c_1564C0 shadow-card dark:shadow-none">
                        <span className='font-semibold'>{item.title}</span>
                        <BsBoxArrowUpRight className='text-c_1564C0 dark:text-c_F0F0F0 ml-2.5 stroke-1' />
                    </button>
                })}
            </div>
        </div>
    </>
}

export default PolicyPage