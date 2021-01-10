module.exports = {
    name: 'help',
    aliases: ['<@750301046580183051>', 'h'],
    category: 'Core',
    utilisation: '{prefix}help',

    execute(client, message, args) {
        message.channel.send({
            embed: {
                color: 'EAC8C8',
                author: { name: 'Help' },
                footer: { text: 'Mini by tyger | >help' },
                timestamp: new Date(),
                description: 'Hello! My name is Mimi! :wave:\nMy prefix is `>`, to find some of my commands use `>commands`.',
            },
        },
    )},
};