<template>
    <div class="container">
        <table class="table is-bordered">
            <tr>
                <td id="key1">1</td>
                <td id="key2">2</td>
                <td id="key3">3</td>
                <td id="key4">4</td>
                <td id="key5">5</td>
                <td id="key6">6</td>
                <td id="key7">7</td>
                <td id="key8">8</td>
                <td id="key9">9</td>
                <td id="key0">0</td>
                <td id="key-">-</td>
                <td id="key^">^</td>
                <td id="key¥">¥</td>
                <td id="keyBS">BS</td>
            </tr>
            <tr>
                <td style="max-width:20px;">tab</td>
                <td id="keyq">q</td>
                <td id="keyw">w</td>
                <td id="keyr">r</td>
                <td id="keyt">t</td>
                <td id="keyy">y</td>
                <td id="keyu">u</td>
                <td id="keyi">i</td>
                <td id="keyo">o</td>
                <td id="keyp">p</td>
                <td id="key@">@</td>
                <td id="key[">[</td>
                <td></td>
                <td colSpan="2" rowspan="2" id="keyEnter">Enter</td>
            </tr>
            <tr>
                <td id="keycontrol">control</td>
                <td id="keya">a</td>
                <td id="keys">s</td>
                <td id="keyd">d</td>
                <td id="keyf">f</td>
                <td id="keyg">g</td>
                <td id="keyh">h</td>
                <td id="keyj">j</td>
                <td id="keyk">k</td>
                <td id="keyl">l</td>
                <td id="key;">;</td>
                <td id="key:">:</td>
                <td id="key]">]</td>
            </tr>
            <tr>
                <td colSpan="2" id="keyShift1">Shift</td>
                <td id="keyz">z</td>
                <td id="keyx">x</td>
                <td id="keyc">c</td>
                <td id="keyv">v</td>
                <td id="keyb">b</td>
                <td id="keyn">n</td>
                <td id="keym">m</td>
                <td id="key,">,</td>
                <td id="key.">.</td>
                <td id="key/">/</td>
                <td id="key_">_</td>
                <td colSpan="2" id="keyShift2">Shift</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
}
</script>
<style>
td{
    min-width:20px;
    min-height:20px;
    width:30px;
    height:30px;
}
</style>
