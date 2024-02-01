import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Main from './src/components/Main.jsx';
import DescriptionCard from './src/components/DescriptionCard.jsx';
import ProfileCard from './src/components/ProfileCard.jsx';
import BoxLayout from './src/components/BoxLayout.jsx';

export default function App() {
  return (
    <ScrollView style={styles.contentContainerStyle}>
      <View style={styles.mainContainer}>
        <Main/>
        <BoxLayout title="Overview">
          <ProfileCard image="https://avatars.githubusercontent.com/u/76418657?s=400&u=1ef4bc3c92f2dd007092dfe788053fd24a29b10c&v=4" name="José de Jesús Quintana Díaz" profession='Software Engineer'/>
          <DescriptionCard text="Hi everyone! Actually I am a software ingenieer student from Autonomous University of Queretaro, I am 21 years old and I was born from México city. At the moment, I am studying a master in coding from the dev.f academy." />    
        </BoxLayout>
        <BoxLayout title="Education">
          <DescriptionCard title="Software Engineering" text="Universidad Autónoma de Queretaro (2022-2025)"></DescriptionCard>
          <DescriptionCard title="Master in coding (Fullstack-developer)" text="Dev.f academy(2023-2024)"></DescriptionCard>
          <DescriptionCard title="Data visualization with python (workshop)" text="Facultad de informatica-UAQ (2023)"></DescriptionCard>
          <DescriptionCard title="Aplications of Artificial Inteligence (workshop)" text="Facultad de informatica-UAQ (2023)"></DescriptionCard>
        </BoxLayout>
        <BoxLayout title="Skills">
          <DescriptionCard title="Front-end" text="HTML, CSS, JavaScript, React, React Native"></DescriptionCard>
          <DescriptionCard title="Back-end" text="Node.js, Python"></DescriptionCard>
          <DescriptionCard title="Design" text="Figma"></DescriptionCard>
        </BoxLayout>
        <BoxLayout title="Work experience">
          <DescriptionCard title="FRONT-END DEVELOPER HACKATHON TROYANO 2022" text="This was a relly good experience with a lot of difficulties but at the same time this was a enriching challenge. In the competence me and my team decided to do an app about consultancies, the app was made with .net, c#, html, css and JavaScript. My team reached the first honorable mention from a competence about more than 30 teams."></DescriptionCard>
          <DescriptionCard title="UX-UI DESIGNER HACKATHON TROYANO 2023" text="This competence has a legal tech theme, me and my team decide to develop a service that could organize, make, delete and save digital contracts to avoid lossing legal contracts. this time we decide to develope the service using node.js, html, css and blockchain. Againist me and my team had the first horable mention but this time was a competence about more than 40 teams. It was a stressful but an entertaining competence."></DescriptionCard>
        </BoxLayout>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#211B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});