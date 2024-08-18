import React from "react";
import "../Styles/howpay.css";

const Howpay = () => {
  return (
    <div>
      <div class="content-section3">
        <div class="flex-container horizontal">
          <h2 class="h2">Frequently asked questions</h2>
          <div class="w-layout-grid grid-faq">
            <div class="questions-block">
              <h3 class="faq-title">What payment methods do you accept?</h3>
              <p class="standard-paragraph">
                We provide easy and secured checkouts via card payments &amp;
                crypto payments.
              </p>
            </div>
            <div class="questions-block">
              <h3 class="faq-title">
                I have a custom request, how do I proceed?
              </h3>
              <p class="standard-paragraph">
                For urgent matters, please contact us via{" "}
                <a
                  href="https://panel.socialplug.io/contact/helpdesk"
                  className="a-standard"
                >
                  contact us
                </a>{" "}
                page.
                <strong>
                  <em></em>
                </strong>
              </p>
            </div>
            <div class="questions-block">
              <h3 class="faq-title">What are Your Working Hours?</h3>
              <p class="standard-paragraph">
                Our customer support is available 24/7, ready to answer to your
                burning questions around the clock.
              </p>
            </div>
            <div class="questions-block">
              <h3 class="faq-title">How fast is the delivery?</h3>
              <p class="standard-paragraph">
                The delivery time depends on the service, some services take 30
                seconds to deliver and some services take up to 24 hours to
                deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howpay;
