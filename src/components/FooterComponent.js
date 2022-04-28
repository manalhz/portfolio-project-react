import React from 'react';

function Footer(props) {
  return (
    <footer className="mt-3 site-footer">
      <div className="container">
        <div className="row">
          <div class="col-12 text-center">
            <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>{' '}
            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>{' '}
            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>{' '}
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <a role="button" class="btn btn-link text-info" href="tel:#"><i class="fa fa-phone"></i>
              1-888-888-8888</a><br />
            <a role="button" class="btn btn-link text-info" href="mailto:manalhz@gmail.com"><i
              class="fa fa-envelope-o"></i>
              manalhz@gmail.com</a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mb-4">
            &copy;2022 JM Software Developments
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
