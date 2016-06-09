
function spin_internal(input:string, inside:boolean) {
    let parts = [];
    
    let openingPos = input.indexOf("{");
    let endPos = input.indexOf("}");
    
    if(openingPos == -1 && endPos == -1) {
        if(inside) {
            // no more { }, but inside brackets. Take a random element seperated by |
            const options = input.split('|');
            return options[Math.floor(Math.random() * options.length)];
        } else {
            // no more { }, and not inside brackets. Just a string, return it.
            return input;
        }
    } else {
        if(openingPos == -1 || endPos == -1) {
            throw new Error("uneven brackets");
        } else if(endPos < openingPos) {
            throw new Error("end bracket before opening bracket");
        } else {
            // Grab matching opening bracket for the first closing bracket (endPos)
            openingPos = input.lastIndexOf("{", endPos);

            // The brackets in openingPos and endPos are now the deepest level brackets within the first brackets

            // "Spin" the deepest level brackets
            parts.push(input.substring(0, openingPos));
            parts.push(spin_internal(input.substring(openingPos+1, endPos),true));
            parts.push(input.substring(endPos+1));
            
            // deepest level now spinned, spin the rest
            return spin_internal(parts.join(''), false);
        }
    }

}

export function spincontent(text:string) {
    return spin_internal(text, false);
    
    /*
    private static String spinText(String input, boolean inside) throws Exception {
		StringBuilder sb = new StringBuilder();

		int openingPos = input.indexOf("{");
		int endPos = input.indexOf("}");

		if(openingPos == -1 && endPos == -1) {
			if(inside) {
				// no more { }, but inside brackets. Take a random element seperated by |
				String[] options = StringUtils.splitPreserveAllTokens(input, '|');
				return options[random.nextInt(options.length)];
			} else {
				// no more { }, and not inside brackets. Just a string, return it.
				return input;
			}
		} else {
			if(openingPos == -1 || endPos == -1) {
				throw new Exception("uneven brackets");
			} else if(endPos < openingPos) {
				throw new Exception("end bracket before opening bracket");
			} else {
				// Grab matching opening bracket for the first closing bracket (endPos)
				openingPos = input.lastIndexOf("{", endPos);

				// The brackets in openingPos and endPos are now the deepest level brackets within the first brackets

				// "Spin" the deepest level brackets
				sb.append(input.substring(0, openingPos));
				sb.append(spinText(input.substring(openingPos+1, endPos),true));
				sb.append(input.substring(endPos+1));
				String res = sb.toString();

				// deepest level now spinned, spin the rest
				return spinText(res, false);
			}
		}
	}
    */
    return "test";
}