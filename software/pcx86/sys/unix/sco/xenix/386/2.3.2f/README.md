---
layout: page
title: SCO Xenix 386 v2.3.2f
permalink: /software/pcx86/sys/unix/sco/xenix/386/2.3.2f/
redirect_from: /disks/pcx86/unix/sco/xenix/386/2.3.2f/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /machines/pcx86/compaq/deskpro386/ega/2048kb/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 386 2.3.2f (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
    commands: bp #003F:00000054
---

When prompted, use the following serial number and activation key:  

	Serial number:  pcjs.org!
	Activation key: khrpljip

NOTE: The PCjs SCO Xenix 386 machines are still being debugged, so don't expect the operating system to work here quite yet.

{% include machine.html id="deskpro386" %}
