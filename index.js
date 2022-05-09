/**
* the IE crutch - IE requires the Error to actually be throw  else is undefined.
*/
const ieCrutch = (err) => { try { throw err } catch (err) { return err } };

module.exports = (...commands) => {
    var err = new Error(); // err = a lot of text strings (stack)
    if (!err.stack) err = ieCrutch(err);
    if (!err.stack) return 0; // probably IE <10
    const stack = err.stack.toString().split(/\r\n|\n/); // convert text to array of text lines
    const re = /:(\d+):(?:\d+)[^\d]*$/;
    const firstLne = stack.find(line => re.exec(line));
    const parsed = re.exec(firstLne);
    const desired = parsed[1];
    commands.forEach(command=>{
        if (command=='report') l('bunch:', { firstLne, parsed, desired });
    });
    return desired;
};
