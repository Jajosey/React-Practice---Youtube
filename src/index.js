//Import react from the node modules and store it in the React variable
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// must give a file reference ./ to distinguish the path for components we make
// not necessary for installed libraries
// js files do not need file type
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCwe5KsUvoaL6d2bmewHkrVV8MC6VDsBVk';

YTSearch({key: API_KEY, term: 'surfboards'},
    function(data) {
        console.log(data);
    });
// Create new component.  This component should produce some html
// () => is nearly identical to function(), just different syntax
// only other difference is that "this" has a different value
class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [],
        selectedVideo: null
      };
      this.videoSearch('Tennessee Titans');
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos)=>{
            //short for this.setState(videos : videos) (when key and value are the same)
            this.setState({
               videos : videos,
               selectedVideo: videos[0]
             });
        });
    }

    render(){
      //debounce returns a new function that can only be called once every X
      // where X is the 2nd parameter in milliseconds
      const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 500);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}/>
            </div>
        );
    }
}

// Must pass an instance of your component to render, not render(App)
// The second argument tells ReactDOM WHERE to insert the html.  So we need an existing HTML doc
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//document.querySelector('.container')) says to go find the <div> with class
// container, then try to render the app component into that <div>
