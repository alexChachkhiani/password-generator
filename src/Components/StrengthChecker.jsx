import React from 'react'

const StrengthChecker = ({ password = "" }) => {
    const getPasswordStrength = () => {
        const passwordLength = password.length

        if (password.length < 1) {
            return ""
        } else if (password.length <= 5) {
            return "VERY WEAK"
        } else if (password.length < 10) {
            return "WEAK"
        } else if (password.length < 15) {
            return "MEDIUM"
        } else if (password.length < 20) {
            return "STRONG"
        }  else {
            return "VERY STRONG"
        }
    }

    const passwordStrength = getPasswordStrength()
    if (!passwordStrength) {
        return (
            <React.Fragment />
        )
    }

    return (
        <div className="password-strength">
            Strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span>
        </div>
    )
}

export default StrengthChecker