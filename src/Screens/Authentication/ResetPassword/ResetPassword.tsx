import VerifyCodeInput from "@/Components/VerifyCodeInput";
import { RootScreens } from "@/Screens";
import { PASSWORD_PATTERN } from "@/Utils/constant";
import React, { FC, memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
interface ResetPasswordProps {
  onNavigate: (screen: RootScreens) => void;
  onResetPassword: (formData: any) => void;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const ResetPassword: FC<ResetPasswordProps> = ({
  onNavigate,
  onResetPassword,
  isLoading,
  isError,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    onResetPassword(data);
  };

  return (
    <View className="flex-1 bg-white items-center px-5 pt-12">
      <Text className="text-center text-neutral-900 text-heading4 mb-8">
        Đặt lại mật khẩu
      </Text>

      <Controller
          control={control}
          name="password"
          rules={{
            required: "Mật khẩu là bắt buộc",
            pattern: {
              value: PASSWORD_PATTERN,
              message: "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
            },
            minLength: {
              value: 6,
              message: "Mật khẩu phải có ít nhất 6 ký tự",
            },
          }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-row items-center bg-neutral-200 rounded-lg px-4 py-3 mb-4">
            <AntDesign name="lock" size={16} color="black" />

            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={!passwordVisible}
              className="flex-1 text-neutral-700 text-body-base-regular"
              value={value}
              onChangeText={onChange}
            />

            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Entypo
                name={passwordVisible ? "eye" : "eye-with-line"}
                size={16}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
      />
      {errors.password && (
        <Text className="text-danger-400">
          {errors.password?.message?.toString()}
        </Text>
      )}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: "Xác nhận mật khẩu là bắt buộc",
          validate: (value, formValues) =>
            value === formValues.password || "Mật khẩu xác nhận không khớp",
        }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-row items-center bg-neutral-200 rounded-lg px-4 py-3 mb-4">
            <AntDesign name="lock" size={16} color="black" />
            <TextInput
              placeholder="Xác nhận mật khẩu"
              secureTextEntry={!passwordVisible}
              className="flex-1 text-neutral-700 text-body-base-regular"
              value={value}
              onChangeText={onChange}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Entypo
                name={passwordVisible ? "eye" : "eye-with-line"}
                size={16}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
      />
      {errors.confirmPassword && (
        <Text className="text-danger-400">
          {errors.confirmPassword.message?.toString()}
        </Text>
      )}
      <Text className="text-neutral-600 text-body-base-regular mb-8">
        Nhập mã xác thực đã được gửi đến email của bạn
      </Text>

      <Controller
        control={control}
        name="code"
        render={({ field: { onChange, value } }) => (
          <VerifyCodeInput code={value || ""} setCode={onChange} />
        )}
      />

      <View className="flex-row mt-6 w-full gap-[3%]">
        <TouchableOpacity
          className="bg-neutral-100 border-neutral-400 rounded-lg px-2 py-3 !border w-[30%]"
          onPress={() => onNavigate(RootScreens.LOGIN)}
        >
          <Text className="text-gray-400 text-body-base-bold text-center">
            Hủy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-primary-600 rounded-lg px-6 py-3 w-[67%]"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <Text className="text-neutral-100 text-body-base-bold text-center">
            {isLoading ? "Đang đặt lại mật khẩu..." : "Đặt lại mật khẩu"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ResetPassword);
