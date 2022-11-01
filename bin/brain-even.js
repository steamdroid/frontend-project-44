#!/usr/bin/env node
import welcomePlayer from '../src/welcomePlayer.js';
import evenGame from '../src/evenGame.js';

const playerName = welcomePlayer();

evenGame(playerName);
