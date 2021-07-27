//TODO: simulate actual dynamic display of images from a server
import arnold from './images/arnold-1.jpg'
import arya from './images/arya-1.jpg'
import female from './images/female_portrait-1.jpg'
import johnson from './images/johnson-1.jpg'
import sam from './images/sam-1.jpg'
import portrait from './images/portrait-1.jpg'

const getImage = (uimg)=>{
    let img
    if(uimg === 'arnold'){
        img = arnold
    }else if(uimg === 'arya'){
        img = arya
    }else if(uimg === 'female'){
        img = female
    }else if(uimg === 'johnson'){
        img = johnson
    }else if(uimg === 'sam'){
        img = sam
    }else if(uimg === 'portrait'){
        img = portrait
    }
    return img
} 

export default getImage