import React from "react";
import Icon from "parts/IconText";
import Button from "elements/Button/index";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto mr-3" style={{ width: 420 }}>
            <Icon></Icon>
            <p className="brand-tagline">
              Book your holiday without Hassle and enjoy blast time with your
              family
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Book a room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-4">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="mailto:support@dostay.com">
                  support@dostay.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6223456789">
                  023-456-789
                </Button>
              </li>
              <li className="list-group-item">
                <span>doStay, Singapore</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 mb-3 row">
          <div className="col text-center copyrights">
            Copyright 2020 • All rights reserved • doStay
          </div>
        </div>
      </div>
    </footer>
  );
}
