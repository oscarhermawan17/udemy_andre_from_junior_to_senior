
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useState } from 'react';

const fetch = require("node-fetch");

export default function Home({robots}) {
    const [searchfield, setSearchfield] =  useState('');

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={(e) => setSearchfield(e.target.value)}/>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div> 
    )
}
  
// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const robots = await res.json()

    return { props: { robots } }
}