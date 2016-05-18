/* Sync server for Loop Habit Tracker
 * Copyright (C) 2016 Álinson Santos Xavier <isoron@gmail.com>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config =
{
    'production': {
        'serverHostname': '::',
        'serverPort': 4000,
        'databaseURL': 'postgres://habits@localhost/habits_prod',
        'sslKeyFile': '/home/habits/ssl/sync.loophabits.org.key',
        'sslCertFile': '/home/habits/ssl/sync.loophabits.org.crt',
        'heartbeatInterval': 300000,
        'heartbeatTimeout': 60000,
    },

    'test': {
        'serverHostname': '::1',
        'serverPort': 4001,
        'databaseURL': 'postgres://habits@localhost/habits_test',
        'sslKeyFile': '/home/habits/ssl/sync.loophabits.org.key',
        'sslCertFile': '/home/habits/ssl/sync.loophabits.org.crt',
        'heartbeatInterval': 300000,
        'heartbeatTimeout': 60000,
    }
};

module.exports = config[process.env.LOOP_ENV || 'production'];
