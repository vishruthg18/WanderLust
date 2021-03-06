import React,{useState,useEffect} from 'react'
import {Grow, Grid, Container, Paper,AppBar,TextField,Button} from '@material-ui/core';
import { useHistory,useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts, getPostsBySearch} from '../../actions/posts';
import Pagination from '../Pagination'
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles'
import backg from '../../images/travelbg.jpg'
function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch=useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page=query.get('page') ||1
    const searchQuery=query.get('searchQuery')
    const classes = useStyles();
    const [search,setSearch]= useState('')  
    const [tags,setTags] = useState([])  

    const handleKeyPress =(e)=>{
        if(e.keyCode ===13){
          searchPost()
        }
        
    }
    
    const handleAdd=(tag)=>setTags([...tags,tag])
    const handleDelete=(tagToDelete)=>setTags(tags.filter(tag => tag!=tagToDelete))

    

   

    const searchPost=()=>{
      console.log('search', search, 'tags',tags)
      if(search.trim() || tags.length){
        console.log('after button click')
        dispatch(getPostsBySearch({search,tags:tags.join(',')}))
        history.push(`/posts/search?searchQuery=${search}||'none'&tags=${tags.join(',')}`)
      }
      else{
        dispatch(getPosts(1))
        history.push('/')
        
      }
    }

    return( <Grow in style={{background:backg}}>
<Container maxWidth='xl' style={{background:backg}}>
    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={mergeClasses.gridContanier}>
      <Grid item xs={12} sm={6} md={9}>
        <Posts setCurrentId={setCurrentId}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
          <TextField
          name='search'
          variant='outlined'
          label='Search Memories'
          fullWidth
          onKeyPress={handleKeyPress}
          value={search}
          onChange={(e)=>{setSearch(e.target.value);}}
          />
          <ChipInput
          style={{margin:'10px 0'}}
          value={tags}
          onAdd={handleAdd}
          onDelete={handleDelete}
            label="Search Tags"
            variant='outlined'
          
          />
          <Button onClick={searchPost} color='primary' variant='contained'className={classes.searchButton}>Search</Button>
        </AppBar>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          {(!searchQuery && !tags.length) &&
          (<Paper  elevation={6}>
          <Pagination page={page} className={classes.pagination}/>
          </Paper>
          )}
      </Grid>
    </Grid>
    </Container>
</Grow>)
}
    
   


export default Home