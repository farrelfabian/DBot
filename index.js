const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const embed = new Discord.RichEmbed()

//Jadwal
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

if(command === 'jadwal') {
    let res;
    switch(args[0]) {
        case "senin":
            res = embed.addField('Senin', '1. B. Inggris II 07.00 - 08.40 ^522 \n2. Komunikasi Data 10.40 - 12.20 ^548 \n3. Pemrograman 15.30 - 17.10 ^741')
            return message.channel.send(res);
        case "selasa":
            res = embed.addField('Selasa', '1. Hardware/Software I 08.50 - 10.30 ^711')
            return message.channel.send(res);
        case "rabu":
            res = embed.addField('Rabu', '1. Sistem Operasi 07.00 - 08.40 ^742 \n2. Hardware/Software I 08.50 - 10.30 ^743 \n3. Komunikasi Data 10.40 - 12.20 ^743')
            return message.channel.send(res);
        case "kamis":
            res = embed.addField('Kamis', '1. Sistem Operasi 08.50 - 10.30 ^523 \n2. Struktur Data 10.40 - 12.20^535 \n3. Organisasi & Arsitektur Komputer 15.30 - 17.10 ^548')
            return message.channel.send(res);
        case "jumat":
            res = embed.addField('Jumat', '1. Struktur Data 07.00 - 08.40 ^732')
            return message.channel.send(res);
        case null || undefined:
            res = embed.setTitle('Jadwal Kuliah')
                .addField('Senin', '1. B. Inggris II 07.00 - 08.40 ^522 \n2. Komunikasi Data 10.40 - 12.20 ^548 \n3. Pemrograman 15.30 - 17.10 ^741')
                .addField('Selasa', '1. Hardware/Software I 08.50 - 10.30 ^711')
                .addField('Rabu', '1. Sistem Operasi 07.00 - 08.40 ^742 \n2. Hardware/Software I 08.50 - 10.30 ^743 \n3. Komunikasi Data 10.40 - 12.20 ^743')
                .addField('Kamis', '1. Sistem Operasi 08.50 - 10.30 ^523 \n2. Struktur Data 10.40 - 12.20^535 \n3. Organisasi & Arsitektur Komputer 15.30 - 17.10 ^548')
                .addField('Jumat', '1. Struktur Data 07.00 - 08.40 ^732')
            return message.channel.send(res);
    }
    message.channel.send(`Jadwal Kosong COK, Gada Kuliah GOBLOK!!!`);
}
});

client.on('message', (message) => {
let em;

	if (message.content === `${prefix}help`) {
		em = embed.addField('Commands', 'Prefix : ^ [Shift+6]')
        .addField('> Jadwal', 'ex : <^jadwal> <^jadwal senin>')
		.addField('> Ping', 'ex : <^ping>')
		message.channel.send(em);
    }
	
	if (message.content === `${prefix}ping`) {
        message.channel.send(`Hei ${message.author} Diam!!!`);
    }
	
	if (message.content === `${prefix}test`) {
        message.channel.send(`Heh ${message.author} Ngapain Lu!!!`);
    }
});









//#######################################################

client.once('ready', () => {
 console.log('Ready!');
});

client.login(token);