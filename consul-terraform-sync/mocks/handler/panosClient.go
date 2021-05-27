// Code generated by mockery v2.2.1. DO NOT EDIT.

package mocks

import (
	time "time"

	mock "github.com/stretchr/testify/mock"
)

// PanosClient is an autogenerated mock type for the panosClient type
type PanosClient struct {
	mock.Mock
}

// Commit provides a mock function with given fields: cmd, action, extras
func (_m *PanosClient) Commit(cmd interface{}, action string, extras interface{}) (uint, []byte, error) {
	ret := _m.Called(cmd, action, extras)

	var r0 uint
	if rf, ok := ret.Get(0).(func(interface{}, string, interface{}) uint); ok {
		r0 = rf(cmd, action, extras)
	} else {
		r0 = ret.Get(0).(uint)
	}

	var r1 []byte
	if rf, ok := ret.Get(1).(func(interface{}, string, interface{}) []byte); ok {
		r1 = rf(cmd, action, extras)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).([]byte)
		}
	}

	var r2 error
	if rf, ok := ret.Get(2).(func(interface{}, string, interface{}) error); ok {
		r2 = rf(cmd, action, extras)
	} else {
		r2 = ret.Error(2)
	}

	return r0, r1, r2
}

// InitializeUsing provides a mock function with given fields: filename, chkenv
func (_m *PanosClient) InitializeUsing(filename string, chkenv bool) error {
	ret := _m.Called(filename, chkenv)

	var r0 error
	if rf, ok := ret.Get(0).(func(string, bool) error); ok {
		r0 = rf(filename, chkenv)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// String provides a mock function with given fields:
func (_m *PanosClient) String() string {
	ret := _m.Called()

	var r0 string
	if rf, ok := ret.Get(0).(func() string); ok {
		r0 = rf()
	} else {
		r0 = ret.Get(0).(string)
	}

	return r0
}

// WaitForJob provides a mock function with given fields: id, sleep, resp
func (_m *PanosClient) WaitForJob(id uint, sleep time.Duration, resp interface{}) error {
	ret := _m.Called(id, sleep, resp)

	var r0 error
	if rf, ok := ret.Get(0).(func(uint, time.Duration, interface{}) error); ok {
		r0 = rf(id, sleep, resp)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}
