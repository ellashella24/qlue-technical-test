const GlobalHelper = {
    /**
     * Generate Dummy Data
     * Dummy User Data for Mocking The Response of Another Server
     * @returns Array of JSON
     */
    generateDummyData() {
        return JSON.parse('[{"id":1,"username":"ellashella","name":"Ella"},{"id":2,"username":"ellashella2","name":"Ella2"},{"id":3,"username":"ellashella3","name":"Ella3"}]');
    },
    /**
     * Output Optimization
     * Optimize Array of JSON Data to Reduce the size of Data Transfer
     * @param {any[]} outputs 
     * @returns JSON Object based on Result Set
     */
    resEncoder(outputs) {
        /** Only optimize Array of JSON Data */
        if(!Array.isArray(outputs) || !outputs.length) return outputs;

        /** Parse Headers */
        const headers = [];
        for(let key in outputs[0]) headers.push(key);

        /** Optimization */
        const data = [];
        outputs.forEach((output, index) => {
            data.push([]);
            headers.forEach(header => {
                data[index].push(output[header]);
            });
        });

        return { h: headers, d: data };
    },
    /**
     * Output Decoder
     * Decode Optimized Array of JSON Data to The Original Structure
     * @param {any[]} outputs 
     * @returns Array of JSON based on Result Set
     */
    resDecoder(outputs) {
        /** Invalid format would not be decoded */
        if(!outputs.h || !outputs.d) return outputs;

        /** Data Decoder */
        return outputs.d.map(val => {
            const res = {};
            val.forEach((item, index) => {
                res[outputs.h[index]] = item;
            });
            return res;
        });
    }
}

export default GlobalHelper