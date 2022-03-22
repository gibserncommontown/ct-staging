import React, { Fragment } from "react"

import Sub from "~layout/sub"

const crumbs = [
    { text: "Privacy Policy", to: "/privacy-policy" },
]

const PrivacyPolicyPage = () => {
    let content = (
        <Fragment>
            <h1>Privacy Policy</h1>
            {/* <p>Last updated: 14 October 2014.</p> */}
            <p>Last updated: 4 August 2021.</p>
            <p>This privacy policy sets out how CommonTown collect, use, disclose, transfer and store information when your use our website, mobile applications and software products (collectively, our “services”).</p>
            <p>CommonTown is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using our services, you can be assured that it will only be used in accordance with this privacy statement.</p>
            <p>CommonTown may change this policy from time to time by updating this page. Please check this page frequently for updates or changes to our privacy policy. The “Last updated” section at the top of this privacy statement will indicate the last time this privacy statement was changed. Your continued use of CommonTown’s services is regarded as your agreement to this privacy statement.</p>

            <h3>What we collect</h3>
            <p>We may collect the following personal information:
                <ul>
                    <li>identification number</li>
                    <li>name</li>
                    <li>date of birth</li>
                    <li>contact information including email address</li>
                </ul>
            </p>
            <p>We may collect the following non-personal information:
                <ul>
                    <li><span >salutation</span>
                    </li>
                    <li><span >organization</span>
                    </li>
                    <li><span >designation</span>
                    </li>
                    <li><span >demographic information such as postcode, preferences and interests</span>
                    </li>
                    <li><span >usage activities on our website, products and services</span>
                    </li>
                    <li><span >other information relevant to customer surveys and/or offers</span>
                    </li>
                </ul>
            </p>

            <h3>What we do with the information gathered</h3>
            <p>We use your information to: help us create, develop, operate, deliver customized content and improve our services.</p>
            <p>For example, we may use your personal information such as identification number and date of birth to verify your identity, so that we can deliver appropriate services to you.</p>
            <p>To better understand your needs and provide you with a better service, we may use your personal information from time to time for:

                <ul>
                    <li><span >internal record keeping and data analysis</span>
                    </li>
                    <li><span >communication to provide service support</span>
                    </li>
                    <li><span >communication about purchases and changes to our terms, conditions and policies</span>
                    </li>
                    <li><span >communication about new products, special offers, updates or other information which we think may be relevant to you</span>
                    </li>
                </ul>
            </p>

            <p>We may also use your personal information to meet and comply with any applicable rules, laws, regulations, codes of practice or guidelines issued by any legal or regulatory body which are binding on us.</p>

            <p>We may aggregate non-personal information such as usage activities and preferences to understand customer behavior and help us provide more useful information to our customers.</p>

            <p>From time to time, we may use your non-personal information for market research purposes.</p>

            <h3>However, we will never share or sell your data to anyone else for any reason.</h3>
            <p>In the event that we do combine non-personal information with personal information, the combined information will be treated as personal information for as long as it is used.</p>

            <h3>How we store and delete personal information</h3>
            <p>We store personal information and data files associated with you on our servers and servers of our service providers. We will keep personal information about you only as long as we need it to fulfill the purposes described in this privacy statement.</p>

            <p>We take reasonable measures to destroy or permanently de-identify personal information in a secure manner when it is no longer required. For example, when the information is printed on paper, we destroy it by shredding.</p>

            <h3>How we protect and secure the integrity of personal information</h3>
            <p>We deploy a combination of administrative, technical and physical security controls in the best of our efforts to prevent unauthorized access, use, or disclosure of your personal information. However, no security controls are 100% effective, thus we cannot completely ensure the security of your personal information. We cannot be held liable for any loss you may suffer from any unauthorized access or loss of personal information.</p>

            <h3>How you can access and amend your personal information</h3>
            <p>You may review and amend your personal information at any time by signing into your user account (where applicable) and selecting “Update Profile” (or equivalent) or by contacting our Support Helpdesk.</p>

            <h3>How you can withdraw consent for the use of your personal information</h3>
            <p>You may contact our Support Helpdesk to withdraw the consent to any or all use of your personal information. If you do not wish to receive any updates or promotional materials from us, you may contact us to "unsubscribe” from these communication emails.</p>

            <p>Depending on the nature of your request, we may not be able to provide or continue to provide our products and services to you. This may constitute a breach in our contractual obligation to you and we cannot be held liable for a breach of that agreement.</p>

            <h3>Use of cookies and links to third party websites</h3>
            <p>A “cookie” is a commonly used automated data collection tool used by internet browsers. It is a small amount of data that is sent to a browser from a web server and gets saved on the hard drive of the computer that you are using. Cookies and similar tools collect standard information from your browser such as browser type, browser language, and the website address you came from when you visited our website.</p>

            <p>CommonTown may use web “cookies”, “pixel tags”, “clear GIFs” or other similar technologies in connection with website pages and HTML-formatted e-mail messages to track the actions of website users and e-mail recipients, in order to:
                <ul>
                    <li><span >determine the success of marketing campaigns</span>
                    </li>
                    <li><span >aggregate statistics about website usage and click rates</span>
                    </li>
                    <li><span >make navigation to our website(s) easier by not requiring you to enter your credentials repeatedly on login pages or by showing you targeted content according to your interests</span>
                    </li>
                </ul>
            </p>
            <p>If you do not want information collected through the use of cookies, you may adjust your browser settings to automatically decline cookies, or manually choose/decline the transfer of a cookie from a particular web site, to your computer. If you set your browser to reject all cookies, you will be unable to use our websites and applications that require login or customization in order to participate. If you choose to accept cookies from our websites and applications, you agree to grant us consent to set cookies on your computer.</p>

            <p>How you can contact us</p>

            <p>If you have any questions or concerns about CommonTown’s Privacy Policy or if you would like to update your personal information, please contact our Support Helpdesk at:</p>


            <p>Email: <a href="mailto:ctdpo@commontown.com" rel="nofollow">ctdpo@commontown.com</a><br />
                Tel: +65 68488900 (Mon-Fri 7am-7pm)</p>
        </Fragment>
    )

    return (
        <Sub title="Privacy Policy" content={content} crumbs={crumbs} />
    )
}

export default PrivacyPolicyPage
