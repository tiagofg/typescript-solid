interface MediaPlayerImplementation {
  playAudio(filename: string): void;
  playVideo(filename: string): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  playAudio(filename: string): void {
    console.log(`Playing audio file "${filename}" on Windows Media Player.`);
  }

  playVideo(filename: string): void {
    console.log(`Playing video file "${filename}" on Windows Media Player.`);
  }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
  playAudio(filename: string): void {
    console.log(`Playing audio file "${filename}" on MacOS Media Player.`);
  }

  playVideo(filename: string): void {
    console.log(`Playing video file "${filename}" on MacOS Media Player.`);
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(filename: string): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  playFile(filename: string): void {
    this.implementation.playAudio(filename);
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  playFile(filename: string): void {
    this.implementation.playVideo(filename);
  }
}