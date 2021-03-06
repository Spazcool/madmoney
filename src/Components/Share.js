import './../App.css';
import 'bulma/css/bulma.css';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlus';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid from '@fortawesome/fontawesome-free-solid';

// TODO
// G+, LINKEDIN  NEEDS TO LINK TO THE ARTICLE
// PNTEREST LINK IS COMPLETELY TRASH
// let pinterest =
//     <a
//       className="button is-danger instagram"
//       href={"https://pinterest.com/pin/create/bookmarklet/?media="+this.props.media+"&url="+this.props.url+"&is_video=false&description="+this.props.title}
//       target="blank">
//       <i className="fab fa-instagram"></i>
//     </a>;
class Share extends Component {
  render() {
    fontawesome.library.add(solid, faFacebook, faGooglePlus, faLinkedin, faInstagram, faTwitter);

    let facebook =
        <a
          className="button is-link facebook"
          href={"https://www.facebook.com/share.php?u=www.madmonnaie.fr"+this.props.url+"&title="+this.props.title}
          target="blank">
          <i className="fab fa-facebook"></i>
        </a>;
    let googlePlus =
        <a
          className="button is-danger googleplus"
          href={"https://plus.google.com/share?url=www.madmonnaie.fr"}
          target="blank">
          <i className="fab fa-google-plus"></i>
        </a>;
    let linkedIn =
        <a
          className="button is-link linkedin"
          href={"https://www.linkedin.com/shareArticle?mini=true&url=www.madmonnaie.fr"}
          target="blank">
          <i className="fab fa-linkedin"></i>
        </a>;
      let twitter =
          <a
            className="button is-link twitter"
            href={"https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.madmonnaie.fr"+this.props.url+"&ref_src="+this.props.source+"&text="+this.props.title+"&tw_p=tweetbutton&url=http%3A%2F%2Fwww.madmoney.com"+this.props.url+"&via=madmoney"}
            target="blank">
            <i className="fab fa-twitter"></i>
          </a>;
    return (
      <div className="buttons is-right" id="share">
        {facebook}
        {googlePlus}
        {linkedIn}
        {twitter}
      </div>
    );
  }
}

export default Share;
