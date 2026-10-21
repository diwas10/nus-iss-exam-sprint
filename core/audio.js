// Web Audio API Engine for Interactive Sound & Frequency Synthesis

class SoundSynthesizer {
  constructor() {
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(frequency = 440, type = 'sine', gain = 0.15) {
    this.init();
    if (this.isPlaying) {
      this.stopTone();
    }

    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();

    this.oscillator.type = type;
    this.oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

    // Smooth volume ramp to avoid loud click
    this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(gain, this.audioCtx.currentTime + 0.05);

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.oscillator.start();
    this.isPlaying = true;
  }

  setFrequency(frequency) {
    if (this.oscillator && this.isPlaying) {
      this.oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
    }
  }

  setWaveform(type) {
    if (this.oscillator && this.isPlaying) {
      this.oscillator.type = type;
    }
  }

  setVolume(gain) {
    if (this.gainNode && this.isPlaying) {
      this.gainNode.gain.setValueAtTime(gain, this.audioCtx.currentTime);
    }
  }

  stopTone() {
    if (this.oscillator && this.isPlaying) {
      try {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);
        setTimeout(() => {
          if (this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
          }
          this.isPlaying = false;
        }, 50);
      } catch (e) {
        this.isPlaying = false;
      }
    }
  }

  toggle(frequency, type, gain) {
    if (this.isPlaying) {
      this.stopTone();
      return false;
    } else {
      this.playTone(frequency, type, gain);
      return true;
    }
  }
}

window.soundSynth = new SoundSynthesizer();
