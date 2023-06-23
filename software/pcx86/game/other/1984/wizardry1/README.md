---
layout: page
title: "Wizardry I: Proving Grounds of the Mad Overlord (1984)"
permalink: /software/pcx86/game/other/1984/wizardry1/
redirect_from: /disks/pcx86/games/other/1984/wizardry1/
machines:
  - id: ibm5150-wizardry1
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    autoMount:
      A:
        name: Wizardry I - Master Disk
      B:
        name: Wizardry I - Scenario Disk
    autoStart: true
    resume: 1
    sound: false
---

{% include machine.html id="ibm5150-wizardry1" %}
