import { writable } from 'svelte/store';
import { machine } from './machine.js';

const { subscribe, update } = writable(machine.initial)

function send(evt) {
	update(v => {
		if (!machine.states[v]) return v
		if (!machine.states[v].on[evt]) return v
		return machine.states[v].on[evt];
	})
}


export const tocMachine = {
	subscribe,
	send
}