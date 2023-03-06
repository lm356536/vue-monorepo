import { ExtractPropTypes } from 'vue'


export const TextType = ['default', 'primary', 'success', 'warning', 'danger']




export const textProps = {
  type: {
    type: String,
    values: TextType
  },
}

export type TextProps = ExtractPropTypes<typeof textProps>