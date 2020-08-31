import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Jon Pow Jones</h1>
        <h2>@jonjon</h2>

        <p>
          Developer at <a href="https://salutemplus.com.br">salutemplus</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de dezembro de 1996
          </li>
        </ul>
        <Followage>
          <span>
            segundo <strong>94</strong>
          </span>
          <span>
            <strong>125 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
