import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div class="bg-gradiant">
        <footer class="site-footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify About-text">By students at FRCRCE - <i>The major motivation for choosing this topic is to learn the nuances of how bill payment works and the problems related to it.</i> Our goal is Designing and implementing an online Electricity Bill Payment System and fixing the issues related to it.</p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Services</h6>
                <ul class="footer-links">
                  <li><a href="">Apply New Connection</a></li>
                  <li><a href="">Pay Bills</a></li>
                  <li><a href="">Submit Meter Reading</a></li>
                  <li><a href="">Split Bills</a></li>
                  <li><a href="">Register Complaint</a></li>
                  <li><a href="">Bill History</a></li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Help & Support</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Customer Care Centre</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                  <a href="http://www.frcrce.ac.in/">CRCE</a>.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="instagram" href=""><i class="bi bi-instagram"></i></a></li>
                  <li><a class="twitter" href=""><i class="bi bi-twitter"></i></a></li>
                  <li><a class="spotify" href=""><i class="bi bi-facebook"></i></a></li>
                  <li><a class="linkedin" href=""><i class="bi bi-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer