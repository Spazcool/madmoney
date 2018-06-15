import './../App.css';
import 'bulma/css/bulma.css';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlus';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faPinterestP from '@fortawesome/fontawesome-free-brands/faPinterestP';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid from '@fortawesome/fontawesome-free-solid';

class Share extends Component {
  render() {
    fontawesome.library.add(solid, faFacebook, faGooglePlus, faLinkedin, faPinterestP, faTwitter);

    let facebook =
        <a
          className="button is-primary facebook"
          href={"https://www.facebook.com/share.php?u=www.madmoney.com"+this.props.url+"&title="+this.props.title}
          target="blank">
          <i className="fab fa-facebook"></i>
        </a>;
    let googlePlus =
        <a
          className="button is-primary googleplus"
          href={"https://plus.google.com/share?url=www.madmoney.com"+this.props.url}
          target="blank">
          <i className="fab fa-google-plus"></i>
        </a>;
    let linkedIn =
        <a
          className="button is-primary linkedin"
          href={"https://www.linkedin.com/shareArticle?mini=true&url=www.madmoney.com"+this.props.url+"&title="+this.props.title+"&source="+this.props.source}
          target="blank">
          <i className="fab fa-linkedin"></i>
        </a>;
      let pinterest =
          <a
            className="button is-primary pinterest"
            href={"https://pinterest.com/pin/create/bookmarklet/?media="+this.props.media+"&url="+this.props.url+"&is_video=false&description="+this.props.title}
            target="blank">
            <i className="fab fa-pinterest-p"></i>
          </a>;
      let twitter =
          <a
            className="button is-primary twitter"
            href={"https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.madmoney.com"+this.props.url+"&ref_src="+this.props.source+"&text="+this.props.title+"&tw_p=tweetbutton&url=http%3A%2F%2Fwww.madmoney.com"+this.props.url+"&via=madmoney"}
            target="blank">
            <i className="fab fa-twitter"></i>
          </a>;
    return (
      <div className="buttons is-right" id="share">
        {facebook}
        {googlePlus}
        {linkedIn}
        {pinterest}
        {twitter}
      </div>
    );
  }
}

export default Share;
