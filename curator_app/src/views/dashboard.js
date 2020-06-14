/**
 * Copyright 2018 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 */

'use strict'

const m = require('mithril')

const Dashboard = {
  view(vnode) {
    return [
      m('.header.text-center.mb-4',
        m('h4', 'Welcome To'),
        m('h1.mb-3', 'DrugNET'),
        m('h5',
          m('em',
            'Based on ',
            m('strong', 'Hyperledger Sawtooth Framework')))),
      m('.blurb',
        m('p',
          m('em', 'DrugNET'),
          ' is a simple, pharama supply chain application built',
          ' using the Hyperledger Sawtooth blockchain platform. It maintains',
          ' a distributed ledger that records the provenance and location',
          ' of assets as they are transferred among various agents in a',
          ' supply chain.'),
        m('p',
          'To use ',
          m('em', 'DrugNET'),
          ', create a new agent using the Log in/Sign up link on the navbar',
          ' above. Once logged in, you will be able to register the',
          ' drugs on the blockchain, update its location, and transfer',
          ' ownership of the drugs to other registered agents.'))
    ]
  }
}

module.exports = Dashboard
