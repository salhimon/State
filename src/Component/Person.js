import React, { Component } from 'react';
import './Profile.css'
export default class Person extends Component {
  constructor(props) {
    super(props);
    this.person = {
      fullName: 'Salhi Moneem',
      bio: 'Développeur passionné de React.',
      imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
      profession: 'Développeur Web',
    };
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Arrête le compteur lorsque le composant est démonté
  }

  render() {
    return (
      <div className="profile">
        <img src={this.person.imgSrc} alt="Profile" className="profile-img" />
        <h2>{this.person.fullName}</h2>
        <p>{this.person.bio}</p>
        <p>{this.person.profession}</p>
        <p>Temps écoulé : {this.state.count} S</p>
      </div>
    );
  }
}
