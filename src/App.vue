<template>
  <div id="app">
    <header>
      <h1>Danny's Music Lists of IU</h1>
    </header>

    <main>
     <div id="bg"></div>
      <section class="player">
        <h2 class="song-title">
          >>{{ current.title }} - <span>{{ current.artist }}</span>
        </h2>
        <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3>The Playlist of IU's Songs</h3>
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
     
    </main>
  </div>
</template>

<script>
export default {
  
  name: "app",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        //dictionary lists
        {
          title: "BBIBBI",
          artist: "IU",
          src: require("./assets/BBIBBI-IU.mp3"),
        },
        {
          title: "Coin",
          artist: "IU",
          src: require("./assets/Coin-IU.mp3"),
        },
        {
          title: "Blueming",
          artist: "IU",
          src: require("./assets/Blueming-IU.mp3"),
        },
        {
          title: "Eight",
          artist: "IU",
          src: require("./assets/eight-IU.mp3"),
        },
        {
          title: "Palette",
          artist: "IU",
          src: require("./assets/Palette-IU.mp3"),
        },
        {
          title: "Celebrity",
          artist: "IU",
          src: require("./assets/Celebrity-IU.mp3"),
        },
        {
          title: "LILAC",
          artist: "IU",
          src: require("./assets/LILAC-IU.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }

      this.player.play();
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.play(this.songs[this.index]);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    //this.player.play();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  /*background-image: url(./assets/IU_bg.jpg);*/
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}

main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0px;
  
  z-index: 8;
}
#bg{
  position:absolute;
  background-image: url(./assets/IU_bg.jpg);
  width: 100%;
  max-width: 768px;
  height: 800px;
  margin: 0 auto;
  padding: 0px;
  z-index: -5;
  opacity: 0.5;
}
.app{
  position:absolute;
}

.song-title {
  padding: 30px 0px;
  color: #424040;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1.5px 3px rgba(95, 95, 95, 0.568);
}
.song-title span {
  font-weight: 400;
  
  font-style: italic;
}
.controls {
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 3px 5px;
  align-items: center;
}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
.play
 {
  font-size: 20px;
  font-weight: 700;
  padding: 35px 25px;
  margin: 40px 5px;
  border-radius: 50%;
  color: #fff;
  background-color: #cc2e5d;
}
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 35px 25px;
  margin: 40px 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #cc2e5d;
}

.prev,
.next {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}

.next {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}

.playlist {
  padding: 0px 30px;  
}
.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 600;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 30px;
  text-align: center;
  
}
.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 12px;
}
.playlist .song:hover {
  color: #ff5858;
}
.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>
<!--
background-image: url(./assets/IU_bg.jpg);
  opacity: 0.3;
  z-index: 8;
  -->