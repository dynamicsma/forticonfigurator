import "../../style/styles.css"

const Forti60F = `
#config-version=FGT60F-7.0.9-FW-build0444-221121:opmode=0:vdom=0:user=admin
#conf_file_ver=306948578137514065
#buildno=0444
#global_vdom=1
config system global
    set alias "FortiGate-60F"
    set gui-certificates enable
    set hostname "FWFUHWI01"
    set management-port-use-admin-sport disable
    set switch-controller enable
    set timezone 26
    set virtual-switch-vlan enable
end
config system accprofile
    edit "prof_admin"
        set secfabgrp read-write
        set ftviewgrp read-write
        set authgrp read-write
        set sysgrp read-write
        set netgrp read-write
        set loggrp read-write
        set fwgrp read-write
        set vpngrp read-write
        set utmgrp read-write
        set wifi read-write
    next
end
config system np6xlite
    edit "np6xlite_0"
    next
end
config system interface
    edit "wan1"
        set vdom "root"
        set mode dhcp
        set allowaccess ping fgfm
        set type physical
        set role wan
        set snmp-index 1
    next
    `;
export default Forti60F ;